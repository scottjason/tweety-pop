require('newrelic')

// declares modules
var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  twitter = require('twitter'),
  sentiment = require('sentiment'),
  env = require('node-env-file'),
  mongoose = require('mongoose');

// declares artists
var popTracker = ["katy perry, eminem, justin bieber, beyonce, taylor swift, jtimberlake, timberlake, adam levine, adamlevine, maroon 5, kaynewest, kanye west, miley cyrus, rihanna, demi lovato, lady gaga"];

// declares artist score arrays
var perryScores = [];
var levineScores = [];
var beyonceScores = [];
var bieberScores = [];
var rihannaScores = [];
var eminemScores = [];
var mileyScores = [];
var kanyeScores = [];
var gagaScores = [];
var swiftScores = [];
var timberlakeScores = [];
var lovatoScores = [];

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Configure Socket.IO
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
// Express configuration
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// declares public folder
app.use('/', express.static(__dirname + '/public'));
// declares routes
app.get('/', function(req, res) {
res.sendfile(__dirname + '/index.html');
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Server
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// initiates server connection
var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log("Tweety Pop successfully listening on " + port);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Models & Database Initiation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// initiates database connection options
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

// initiates database connection
mongoose.connect("mongodb://scottjason:tweetypop084@ds033559.mongolab.com:33559/heroku_app28482092", options, function(err) {
  if (!err) { console.log( 'Successfully initiated database connection.' ) }
});

// creates database schema
var tweetSchema = mongoose.Schema({
  popStar: { type: String }, tweetScore: { type: Number } },
{
  capped: { size: 2000000, max: 10000, autoIndexId: true }
});

// creates model Rating and 'score' collection
var Rating = mongoose.model('score', tweetSchema);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Client Handling
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// twitter authorization
tweet = new twitter({
  consumer_key: "Qz8vqLjcmgxOjhUpwd3hD2ZCw",
  consumer_secret: "vRSxeLjj2pddubDxkpaZ1bqsonC0SrWsx9xMaBw91U2P8N42J2",
  access_token_key: "195177239-1NI8bL9utZ2MnNXowy607mYLABlH83gp4k9TAgrA",
  access_token_secret: "ZVusxwm9y4aJCnvtx3MHj7148REZikXyySeZURZsLUVGz"
});

// streams incoming tweets
tweet.stream('statuses/filter', {
    "track": popTracker
  },
  function(stream) {
    stream.on('data', function(data) {

      // remove foreign characters from tweets
      var newTweet = data.text;
      var foreignCharacters = unescape(encodeURIComponent(newTweet));
      newTweet = decodeURIComponent(escape(foreignCharacters));
      var score = sentiment(newTweet).score
      if (newTweet != null && score != 0) {
          var newScore = new Rating( { popStar: newTweet, tweetScore: score } )

          newScore.save(function(err) {
          if(err) throw new Error( 'There was an error while saving to the database.' ) })


        io.sockets.emit('analysis' newTweet, score);
        io.sockets.emit('incoming', newTweet, score);
      }
    })
  })


io.sockets.on('connection', function (socket) {
  console.log('Successfully initiated socket connection.')
// queries the database in chunks of 100 collections
var tweetQuery = Rating.find( {} ).limit(1000);
  tweetQuery.exec(function(err, docs) {
    if(err) throw new Error( 'There was an error while retrieving instructions from the database.' );
    // emit database data to client
    io.sockets.emit('queryLoaded', docs)
  });
  socket.on('disconnect', function(socket) {
  console.log('Tweety Pop has been temporarily disconnected.');
  });
});