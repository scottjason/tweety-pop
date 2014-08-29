var dotenv = require('dotenv');
    dotenv.load();

var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , twitter = require('twitter')
  , sentiment = require('sentiment')
  , sys = require('util');
  // mongoose = require('mongoose');

// declares artists to track, artist sentiment score arrays & mongoIncrementer closure
var popTracker = [ "katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga" ];


// declares public folder
app.use('/', express.static(__dirname + '/public'));
// declares routes
app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');
});

app.set('port', process.env.PORT || 8000);



// // creates the database connection string
// var mongodbUri = process.env.mongodbUri

// // initiate the database connection
// mongoose.connect(mongodbUri);

// // When successfully connected
// mongoose.connection.on('connected', function () {
//   console.log('Mongoose default connection open to ' + mongodbUri);
//   queryMongo();
// });

// // If the connection throws an error
// mongoose.connection.on('error',function (err) {
//   console.log('Mongoose default connection error: ' + err);
// });

// // When the connection is disconnected
// mongoose.connection.on('disconnected', function () {
//   console.log('Mongoose default connection disconnected');
// });

// // creates schema
// var tweetSchema = mongoose.Schema(
//   { popStar: { type: String }, tweetScore: { type: Number } },
//   { capped: { size: 50000, max: 50000, autoIndexId: false } }
// );
// // creates model Artist and 'score' collection
// var Artist = mongoose.model('artist', tweetSchema);

// function queuryMongo(){
//     var tweetQuery = Artist.find({}).limit(10);
//     tweetQuery.exec(function(err, docs) {
//       if (err) throw new Error('There was an error while querying the database.');
//       for (var i = 0; i < docs.length; i++) {
//         analyzeTweet(docs[i].popStar, docs[i].tweetScore)
//       }
//     setTimeout(queryMongo, 1200)
//     })
//   }




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
  console.log("sending to view")
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

// ----------------------------------------------------------------------------------------------

// produciton
var port = process.env.PORT || 8080

server.listen(port, function() {
  console.log("Tweety Pop successfully listening on " + port);
});
