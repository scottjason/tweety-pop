var dotenv = require('dotenv');
    dotenv.load();

var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , twitter = require('twitter')
  , sentiment = require('sentiment')
  , mongoose = require('mongoose')
  , popTracker
  , mongodbUri
  , tweetSchema
  , Artist
  , tweet
  , port;

// ----------------------------------------------------------------------------------------------

// declares artists to track, artist sentiment score arrays & mongoIncrementer closure
popTracker = [ "katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga" ];

// declares public folder
app.use('/', express.static(__dirname + '/public'));
// declares routes
app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');
queryMongo();
streamTwitter();
});

// creates the database connection string
mongodbUri = process.env.mongodbUri

// initiate the database connection
mongoose.connect(mongodbUri);

// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + mongodbUri);
});

// // If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// // When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// creates schema
tweetSchema = mongoose.Schema(
  { popStar: { type: String }, tweetScore: { type: Number } },
  { capped: { size: 50000, max: 50000, autoIndexId: false } }
);
// creates model Artist and 'score' collection
Artist = mongoose.model('artist', tweetSchema);

// ----------------------------------------------------------------------------------------------

// stream twitter, save to mongodb
function streamTwitter(){
// twitter authorization
tweet = new twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});

tweet.stream('statuses/filter', {
    "track": popTracker
  },
  function(stream) {
  stream.on('data', function(data) {
      if(data.id != null){
      saveTweet(data)
    }
  });
 });
}

// ----------------------------------------------------------------------------------------------

// query mongo every 500ms
function queryMongo(){
    var tweetQuery = Artist.find({}).limit(7);
    tweetQuery.exec(function(err, docs) {
      if (err) return console.error(err);
      for (var i = 0; i < docs.length; i++) {
        // console.log(docs[i].popStar, docs[i].tweetScore)
        renderTweet(docs[i].popStar, docs[i].tweetScore)
      }
    setTimeout(queryMongo, 500)
  })
}

// ----------------------------------------------------------------------------------------------
// save incoming tweets to mongo, on-screen results are piped through the database first
function saveTweet(data) {
  console.log("sending to mongo")
  // removes foreign characters from tweets, create sentiment score
  var foreignCharacters = unescape(encodeURIComponent(data.text));
  var tweetFormatted = decodeURIComponent(escape(foreignCharacters));
  var score = sentiment(tweetFormatted).score

  // declares conditions to save to database
  if (score != 0) {
    var newDocument = new Artist({ popStar: tweetFormatted, tweetScore: score });
    newDocument.save(function(err) {
      if (err) { console.log(err) }
      console.log( "Tweety Pop saved a new tweet with id: " + data.id )
    })
  }
}

// emit tweets and scores to client
function renderTweet(tweet, score) {
  io.sockets.emit('analyzeScore', tweet, score)
  io.sockets.emit('renderTweet', tweet, score)
}

// initiate server connection
// ----------------------------------------------------------------------------------------------
port = process.env.PORT || 3000

server.listen(port, function() {
  console.log("Tweety Pop successfully listening on " + port);
});