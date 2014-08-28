var dotenv = require('dotenv');
    dotenv.load();
var express = require('express')
  , sys = require('util')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , sentiment = require('sentiment')
  , twitter = require('ntwitter')
  , mongoose = require('mongoose')
  , uriUtil = require('mongodb-uri')
  , tweet
  , mongodbUri
  , mongooseUri
  , popTracker
  , options
  , db
  , tweetSchema
  , Artist
  , score


// declares artists to track & artist sentiment score arrays
popTracker = [ "katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga" ];

// declares public folder
app.use('/', express.static(__dirname + '/public'));

// declares routes
app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

// ----------------------------------------------------------------------------------------------
// creates the database connection string

mongodbUri = process.env.mongodbUri;
mongooseUri = uriUtil.formatMongoose(mongodbUri);

// creates database options
options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };

// initiate & store the database connection
mongoose.connect(mongooseUri, options);

db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

tweetSchema = mongoose.Schema(
  { popStar: { type: String }, tweetScore: { type: Number } },
  { capped: { size: 500000, max: 50000, autoIndexId: false } }
);

// stores tweet documents in a collection called "artists"
Artist = mongoose.model('artists', tweetSchema);

// ----------------------------------------------------------------------------------------------

// var queryMongo = (function() {
//   var count = 0;
//   var queryCounter = function() {
//     ++count;
//     if ( count == 100 ) {
//       count = 0;
//       setTimeout( queryMongo, 60000 )
//     }

//     sys.puts( "Tweety Pop has queryed the database " + count + " times." );

//     Artist.find({}).limit(10).exec(function(err, docs) {
//       if ( err ) sys.puts(sys.inspect( err ));
//       for (var i=0; i < docs.length; i++) {
//         io.sockets.emit( 'analyzeScore', docs[i].popStar, docs[i].tweetScore )
//         io.sockets.emit( 'renderTweet', docs[i].popStar, docs[i].tweetScore )
//       }
//     });
//     setTimeout(queryMongo, 1200);
//   };
//   queryCounter.count = function() {
//     return count;
//   };
//   return queryCounter;
// }());


// ----------------------------------------------------------------------------------------------

// twitter auth
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
      addTweet(data)
    }
  });
  stream.on("error", function (error) {
    sys.puts(sys.inspect(error));
  });
   stream.on('end', function (response) {
    sys.puts( sys.inspect( response ) );
  });
  stream.on('destroy', function (response) {
    sys.puts(sys.inspect( response ) );
  });
});

// ----------------------------------------------------------------------------------------------

function addTweet(data) {
  // removes foreign characters from tweets, create sentiment score
  var foreignCharacters = unescape(encodeURIComponent(data.text));
  var tweetFormatted = decodeURIComponent(escape(foreignCharacters));
  score = sentiment(tweetFormatted).score

  // emit and render stream
  io.sockets.emit('analyzeScore', tweetFormatted, score)
  io.sockets.emit('renderTweet', tweetFormatted, score)

  // declares conditions to save to database
  // if (score != 0) {
    // var newDocument = new Artist({ popStar: tweetFormatted, tweetScore: score });
    // newDocument.save(function(err) {
      // if (err) { sys.puts(err) }
      // sys.puts( "Tweety Pop saved a new tweet with id: " + data.id )
    // })
  }
// }

// development server
// server.listen( serverPort )
// sys.log( "Node  server has been sucessfully connected on port: " + serverPort );

// production server
server.listen( process.env.PORT || 8080 )
sys.log( "Node  server has been sucessfully connected on port: " + process.env.PORT );
// queryMongo();