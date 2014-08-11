// require modules
var Array = require('node-array');
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    twitter = require('twitter'),
    sentiment = require('sentiment'),
    env = require('node-env-file'),
    mongoose = require('mongoose'),
    mongo = require('mongodb'),
    fs = require('fs-extra'),
    Grid = require('gridfs-stream');

// declare artists
var popTracker = [ "katy perry, eminem, justin bieber, beyonce, taylor swift, jtimberlake, timberlake, adele, adam levine, adamlevine, maroon 5, bruno mars, miley cyrus, rihanna, demi lovato, imagine dragons, imagedragons" ];

// declare artist score arrays
var perryScores = [];
var levineScores = [];
var beyonceScores = [];
var bieberScores = [];
var rihannaScores = [];
var eminemScores = [];
var mileyScores = [];
var brunoScores = [];
var adeleScores = [];
var swiftScores = [];
var timberlakeScores = [];
var lovatoScores = [];

// initiate server connection
server.listen(3000);
console.log("Node server started. Listening on port: 3000");

// initiate database connection
mongoose.connect(process.env.uri, function(err) {
  if (err) { throw err }
  else { console.log("Successfully initiated database connection") }
});

// assigns driver directly to the gridfs-stream module
Grid.mongo = mongoose.mongo;

// opens file stream connection and passes the database into 'Grid'
var conn = mongoose.createConnection(process.env.uri);
conn.once('open', function () {
var gfs = Grid(conn.db);

// declares writeStream options
var options = {
    mode: 'w',
    root: 'scores',
    metadata: { popStar: { type: String }, tweetScore: { type: Number } }
}

// calls createWriteStream and passes in options
var writestream = gfs.createWriteStream([options]);

fs.createReadStream('tweet.txt').pipe(writestream);

writestream.on('close', function (file) {
  console.log(file.filename);

});
});

var readstream = gfs.createReadStream(options);
readstream.pipe(response);

// create schema
var tweetSchema = mongoose.Schema(
    { popStar: { type: String }, tweetScore: { type: Number } },
    { capped: { size: 10485760, max: 10000, autoIndexId: true } }
);

// create model Rating and 'score' collection
var Rating = mongoose.model('score', tweetSchema);

// declare public folder
app.use('/', express.static(__dirname + '/public'));

// declare routes
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
    search = req.query || "";
});

// twitter authorization
tweet = new twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
});

// stream and emit incoming tweets, then write to database
// read stored tweets from database and write to file
io.sockets.on('connection', function() {
  tweet.stream('statuses/filter', { "track": popTracker },
    function(stream) {
      stream.on('data', function(data) {
      // remove foreign characters from tweets
      var newTweet = data.text;
      var foreignCharacters = unescape(encodeURIComponent(newTweet));
      newTweet = decodeURIComponent(escape(foreignCharacters));

        if (newTweet != null) {
          var newScore = new Rating( { popStar: newTweet, tweetScore: sentiment(newTweet).score } );
          newScore.save(function(err) {
            if (err) { throw err }
              io.sockets.emit('message', newTweet, sentiment(newTweet));
            })
          }
      });
   });
});
