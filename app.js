//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Declares Modules
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  twitter = require('twitter'),
  sentiment = require('sentiment'),
  env = require('node-env-file'),
  mongoose = require('mongoose');

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Declares Artists To Track & Artist Sentiment Score Arrays
//////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Configures Socket.IO
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var socketData = {};
if(!process.env.NODE_ENV)
{ io.attach( server, { 'serveClient': false } )}

io.use(function(socket, next) {
  var query = socket.request._query;
  socketData[socket.id] = { myNumber: query.mynumber }
  next();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Configures Express
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// declares public folder
app.use('/', express.static(__dirname + '/public'));
// declares routes
app.get('/', function(req, res) {
res.sendfile(__dirname + '/index.html');
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initiates Server Connection
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log("Tweety Pop successfully listening on " + port);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initiaties Models & Database
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// initiates database connection options
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

// initiates database connection
// mongoose.connect("mongodb://scottjason:tweetypop084@ds033559.mongolab.com:33559/heroku_app28482092", options, function(err) {
//   if (!err) { console.log( 'Successfully initiated database connection.' ) }
// });

// creates database schema
// var tweetSchema = mongoose.Schema(
//   { popStar: { type: String }, tweetScore: { type: Number } },
//   { capped: { size: 20000000, max: 100000, autoIndexId: false } }
// );

// creates model Rating and 'score' collection
// var Rating = mongoose.model('score', tweetSchema);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Streams Incoming Tweets, Renders to View and Stores to Database
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// twitter authorization
tweet = new twitter({
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
        // var newDocument = new Rating( { popStar: newTweet, tweetScore: score } );
        // newDocument.save(function(err) { if( err ) throw new Error( 'There was an error while saving to the database.' ) })

        analyzeTweet( newTweet, score );
        io.sockets.emit( 'incoming', newTweet, score )}

      // declares conditions to render only
      else if ( newTweet != null ) {
        analyzeTweet( newTweet, score );
        io.sockets.emit( 'incoming', newTweet, score )}
      else {};
   });
});

// queries the database continuously in chunks of 1000 collections on socket connection
// io.sockets.on('connection', function (socket) {
// console.log('Successfully initiated socket connection.')

// var tweetQuery = Rating.find( {} ).limit(1000);
// console.log('The database successfully made a query.');
//   tweetQuery.exec(function(err, docs) {
//     if( err ) throw new Error( 'There was an error while retrieving instructions from the database.' );

//       for (var i=0; i < docs.length; i++){
//         analyzeTweet( docs[i].popStar, docs[i].tweetScore );
//     }
//   });

//   socket.on('disconnect', function(socket) {
//   console.log('Tweety Pop has been temporarily disconnected.');
//   });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Analyzes Tweets From Live Stream and From Database Query Before Being Passed To Client
//////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    } else {
      console.log('.. analyzing data stream ..')
  }
}