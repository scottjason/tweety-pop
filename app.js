var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  twitter = require('twitter'),
  sentiment = require('sentiment'),
  env = require('node-env-file'),
  mongoose = require('mongoose');

// declares artists to track & artist sentiment score arrays
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

app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || '0.0.0.0');



///////////////////////////////////////////////
// Configure Sockets And DataBase Connection
///////////////////////////////////////////////

server.listen(app.get('port'), app.get('host'), function(){
  console.log("Express server listening on port " + app.get('port'));
});



// var count;

// io.sockets.on('connection', function (socket) {
//     // queryMongo();
//     count++;
//     io.sockets.emit('count', {
//         number: count
//     });

//     socket.on('disconnect', function () {
//         console.log('client disconnected. ');
//         count--;
//         io.sockets.emit('count', {
//             number: count
//         });
//     });
// });
// var dbURI = "mongodb://scottjason:tweetypop084@proximus.modulusmongo.net:27017/zOwupo9h"
// initiates database connection
// mongoose.connect(dbURI)

// stores the database connection
// var db = mongoose.connection;

///////////////////////////////////////////////
// MONGO DB CONNECTION EVENTS
///////////////////////////////////////////////

// When successfully connected
// db.on('connected', function () {
//   console.log('Mongoose default connection open to ' + dbURI);
// });

// // If the connection throws an error
// db.on('error',function (err) {
//   console.log('Mongoose default connection error: ' + err);
// });

// // When the connection is disconnected
// db.on('disconnected', function () {
//   console.log('Mongoose default connection disconnected');
// });

// // If the Node process ends, close the Mongoose connection
// process.on('SIGINT', function() {
//   db.close(function () {
//     console.log('Mongoose default connection disconnected through app termination');
//     process.exit(0);
//   });
// });

// schemas and models
var tweetSchema = mongoose.Schema(
  { popStar: { type: String }, tweetScore: { type: Number } },
  { capped: { size: 5000000, max: 50000, autoIndexId: false } }
);
// creates model Rating and 'score' collection
var Rating = mongoose.model('score', tweetSchema);

///////////////////////////////////////////////
// Streams Incoming Tweets & Queries Database
///////////////////////////////////////////////



// function queryMongo() {
//   var tweetQuery = Rating.find({}).limit(500);
//     tweetQuery.exec(function(err, docs) {
//       if (err) console.log(err);
//       for (var i = 0; i < docs.length; i++) {
//         analyzeTweet(docs[i].popStar, docs[i].tweetScore)
//       }
//   })
// }

// var queryMongo = (function() {
//   var count = 0;
//   var queryCounter = function() {
//     ++count;
//     console.log("Tweety Pop has queryed the database " + count + " times.");
//     var tweetQuery = Rating.find({}).limit(500);
//     tweetQuery.exec(function(err, docs) {
//       if (err) console.log(err);
//       for (var i = 0; i < docs.length; i++) {
//         analyzeTweet(docs[i].popStar, docs[i].tweetScore)
//       }
//     });
//     setTimeout(ClientStatus.prototype.verify, 2000);
//   };
//   queryCounter.count = function() {
//     return count;
//   };
//   return queryCounter;
// }())
// twitter authorization

var tweet = new twitter({
  consumer_key: "Qz8vqLjcmgxOjhUpwd3hD2ZCw",
  consumer_secret: "vRSxeLjj2pddubDxkpaZ1bqsonC0SrWsx9xMaBw91U2P8N42J2",
  access_token_key: "195177239-1NI8bL9utZ2MnNXowy607mYLABlH83gp4k9TAgrA",
  access_token_secret: "ZVusxwm9y4aJCnvtx3MHj7148REZikXyySeZURZsLUVGz"
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
      if ( newTweet != null && score != 0 ) {
        var newDocument = new Rating( { popStar: newTweet, tweetScore: score } );
        newDocument.save(function(err) { if( err ) throw new Error( 'There was an error while saving to the database.' ) })

        analyzeTweet( newTweet, score );
        io.sockets.emit( 'incoming', newTweet, score )}

      // declares conditions to render only
      else if ( newTweet != null ) {
        analyzeTweet( newTweet, score );
        io.sockets.emit( 'incoming', newTweet, score )}
      else {};
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

