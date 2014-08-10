// require modules
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    util = require('util'),
    twitter = require('twitter'),
    sentiment = require('sentiment'),
    env = require('node-env-file'),
    mongoose = require('mongoose')

//
server.listen(3000);
console.log("Node server started. Listening on port: 3000")

// connect to database
mongoose.connect(process.env.uri, function(err){
    if(err){
        console.log("Error: unable to initiate database connection");
    }
    else {
        console.log("Successfully connected to mongoDB")
    }
})

// create schema
var tweetSchema = mongoose.Schema({
    popStar: String,
    tweetScore: Number
});

// create model Rating and 'score' collection
var Rating = mongoose.model('score', tweetSchema);

//
app.use('/', express.static(__dirname + '/public'));

//
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


// first retrieve tweets from database and emit
// second recieve incoming tweets, delete one document, write to database, then emit
io.sockets.on('connection', function() {


    Rating.find({}, function(err, docs){
        if (err) throw err;
        io.sockets.emit('load tweets', docs);
    });


    var wordsToTrack = ["katy perry, eminem, justin bieber, beyonce, taylor swift, jtimberlake, timberlake, adele, adam levine, adamlevine, maroon 5, bruno mars, miley cyrus, rihanna, demi lovato, imagine dragons, imagedragons"]

    tweet.stream('statuses/filter', {
            "track": wordsToTrack
        },
        function(stream) {
            stream.on('data', function(data) {
                var newTweet = data.text;
                var foreignCharacters = unescape(encodeURIComponent(newTweet));
                 newTweet = decodeURIComponent(escape(foreignCharacters));
                if (newTweet != null) {
                    // removes one document
                    Rating.findOne({tweetScore: 0})(function (err, doc) {
                    doc.remove();
                    });
                    var newScore = new Rating({ popStar: newTweet, tweetScore: sentiment(newTweet).score});
                    newScore.save(function(err){
                        if (err) throw err;
                    io.sockets.emit('message', newTweet, sentiment(newTweet));
                    })
                }
            });
      });
});