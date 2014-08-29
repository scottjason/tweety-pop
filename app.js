var dotenv = require('dotenv');
    dotenv.load();

var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  twitter = require('twitter'),
  sentiment = require('sentiment');
  // mongoose = require('mongoose');

// declares artists to track, artist sentiment score arrays & mongoIncrementer closure
var popTracker = [ "katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga" ];

var perryScores = [],
    levineScores = [],
    beyonceScores = [],
    bieberScores = [],
    rihannaScores = [],
    eminemScores = [],
    mileyScores = [],
    kanyeScores = [],
    gagaScores = [],
    swiftScores = [],
    timberlakeScores = [],
    lovatoScores = [];


///////////////////////////////////////////////
// Configures Express
///////////////////////////////////////////////

// declares public folder
app.use('/', express.static(__dirname + '/public'));
// declares routes
app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');
});

app.set('port', process.env.PORT || 8000);

// ///////////////////////////////////////////////
// // Initiates Database Connection
// ///////////////////////////////////////////////

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


// ///////////////////////////////////////////////
// // Writes to and Queries the Database
// ///////////////////////////////////////////////

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
      // removes foreign characters from tweets, create sentiment score
      var newTweet = data.text;
      var foreignCharacters = unescape(encodeURIComponent(newTweet));
      newTweet = decodeURIComponent(escape(foreignCharacters));
      var score = sentiment(newTweet).score

      // declares conditions to both save and render
      // if ( newTweet != null && score != 0 ) {
      //   var newDocument = new Artist( { popStar: newTweet, tweetScore: score } );
      //   newDocument.save(function(err) { if( err ) throw new Error( 'There was an error while saving to the database.' ) })
      console.log('made it before sockets emit')
        // analyzeTweet( newTweet, score );
        io.sockets.emit( 'analyzeScore', newTweet, score )
        io.sockets.emit( 'renderTweet', newTweet, score )


      // declares conditions to render only
   //    else if ( newTweet != null ) {
   //      analyzeTweet( newTweet, score );
   //      io.sockets.emit( 'incoming', newTweet, score )}
   //    else {};
   });
 });


///////////////////////////////////////////////
// Analyzes Tweet Stream and Database Query
///////////////////////////////////////////////

function analyzeTweet(newTweet, score) {
    if (newTweet.indexOf('perry') != -1 ) {
      perryScores.push(score);
      io.sockets.emit('perryScoreArray', perryScores);
    } else if ( newTweet.indexOf('bieber') != -1 ) {
      bieberScores.push(score);
      io.sockets.emit('bieberScoreArray', bieberScores);
    } else if (( newTweet.indexOf('levine') != -1 || newTweet.indexOf('maroon') != -1) ) {
      levineScores.push(score);
      io.sockets.emit('levineScoreArray', levineScores);
    } else if ( newTweet.indexOf('beyonce') != -1 ) {
      beyonceScores.push(score);
      io.sockets.emit('beyonceScoreArray', beyonceScores);
    } else if ( newTweet.indexOf('rihanna') != -1 ) {
      rihannaScores.push(score);
      io.sockets.emit('rihannaScoreArray', rihannaScores);
    } else if ( newTweet.indexOf('eminem') != -1 ) {
      eminemScores.push(score);
      io.sockets.emit('eminemScoreArray', eminemScores);
    } else if ( newTweet.indexOf('miley') != -1 ) {
      mileyScores.push(score);
      io.sockets.emit('mileyScoreArray', mileyScores);
    } else if ( newTweet.indexOf('kanye') != -1 ) {
      kanyeScores.push(score);
      io.sockets.emit('kanyeScoreArray', kanyeScores);
    } else if ( newTweet.indexOf('gaga') != -1 ) {
      gagaScores.push(score);
      io.sockets.emit('gagaScoreArray', gagaScores);
    } else if ( newTweet.indexOf('swift') != -1 ) {
      swiftScores.push(score);
      io.sockets.emit('swiftScoreArray', swiftScores);
    } else if ( newTweet.indexOf('timberlake') != -1 ) {
      timberlakeScores.push(score);
      io.sockets.emit('timberlakeScoreArray', timberlakeScores);
    } else if ( newTweet.indexOf('lovato') != -1 ) {
      lovatoScores.push(score);
      io.sockets.emit('lovatoScoreArray', lovatoScores);
    } else {}
  }

///////////////////////////////////////////////
// Initiates Server Connection
///////////////////////////////////////////////

var port = process.env.PORT || 3000

server.listen(port, function() {
  console.log("Tweety Pop successfully listening on " + port);
});
