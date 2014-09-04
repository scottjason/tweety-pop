var express = require('express')
  , dotenv = require('dotenv')
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

// invokes enviroment
  dotenv.load();

// ----------------------------------------------------------------------------------------------

// declares artists to track, artist sentiment score arrays & mongoIncrementer closure
popTracker = [ "katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga" ];

// declares express views
app.use('/', express.static(__dirname + '/public'));

// declares express error handler
app.use(function(error, request, response, next) {
  response.status(500);
  response.render("You've encounterd an error.", {error: error});
})

// declares routes
app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');
});

// creates the database connection string
mongodbUri = process.env.mongodbUri

// initiate the database connection
mongoose.connect(mongodbUri);

// When successfully connected
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection open to ' + mongodbUri);
  queryMongo();
});

// // if the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// // when the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// when the node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

// creates the schema
tweetSchema = mongoose.Schema(
  { popStar: { type: String }, tweetScore: { type: Number } },
  { capped: { size: 50000, max: 50000, autoIndexId: false } }
);

// creates the model 'Artist' for the 'artist' collection
Artist = mongoose.model('artist', tweetSchema);

// ----------------------------------------------------------------------------------------------

// twitter authorization
tweet = new twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});

// stream twitter, save to mongodb
tweet.stream('statuses/filter', {
    "track": popTracker
  },
  function(stream) {
  stream.on('error', function(error){
    io.sockets.emit('errorHandler', error);
  })

  stream.on('data', function(data) {
      if(data.id != null){
      saveTweet(data)
    }
  });
 });

// ----------------------------------------------------------------------------------------------

// query tweets stored in mongo db
function queryMongo(){
  console.log('just fetched tweets')
    var tweetQuery = Artist.find({}).limit(10);
    tweetQuery.exec(function(err, docs) {
      if (err) return console.error(err);
      for (var i = 0; i < docs.length; i++) {
        // console.log(docs[i].popStar, docs[i].tweetScore)
        renderTweet(docs[i].popStar, docs[i].tweetScore)
      }
    setTimeout(queryMongo, 3000 )
  })
}

// ----------------------------------------------------------------------------------------------
// saves incoming tweets to mongo
function saveTweet(data) {
  // removes foreign characters from tweets, create sentiment score
  var foreignCharacters = unescape(encodeURIComponent(data.text));
  var tweetFormatted = decodeURIComponent(escape(foreignCharacters));
  var score = sentiment(tweetFormatted).score

  // declares conditions to save to database
  if (score != 0) {
    renderTweet(tweetFormatted, score);

    var newDocument = new Artist({ popStar: tweetFormatted, tweetScore: score });
    newDocument.save(function(err) {
      if (err) { console.log(err) }
    })
  }
}

// emits tweets and tweet-scores to client
function renderTweet(tweet, score) {
  io.sockets.emit('analyzeScore', tweet, score)
  io.sockets.emit('renderTweet', tweet, score)
}

// ----------------------------------------------------------------------------------------------
// initiates server connection

var port = process.env.PORT || 3000
server.listen(port, function() {
  console.log("Tweety Pop successfully listening on " + port);
});


