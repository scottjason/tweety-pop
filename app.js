// require modules
var Array = require('node-array');
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    util = require('util'),
    twitter = require('twitter'),
    sentiment = require('sentiment'),
    env = require('node-env-file'),
    mongoose = require('mongoose')

// declare artist score arrays
var perryScores = []

// initiate server connection
server.listen(3000);
console.log("Node server started. Listening on port: 3000")

// initiate database connection
mongoose.connect(process.env.uri, function(err) {
    if (err) {
        console.log("Error: unable to initiate database connection");
    } else {
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


// first: stream incoming tweets from Twitter
// second: TODO delete tweet from database
// third: write tweet to database
// fourth: emit live tweets
// fifth: stream tweets from database
// sixth: emit database tweets

io.sockets.on('connection', function() {


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

                    var newScore = new Rating({
                        popStar: newTweet,
                        tweetScore: sentiment(newTweet).score
                    });
                    newScore.save(function(err) {
                        if (err) {
                            throw err
                        }
                        io.sockets.emit('message', newTweet, sentiment(newTweet));
                    })
                }
            });
        });
    var stream = Rating.find().stream();
    stream.on('data', function(doc) {

        if (doc.popStar.indexOf('perry') != -1) {
            perryScores.push(doc.tweetScore);
            io.sockets.emit('perryScoreArray', perryScores);
        }
    }).on('error', function(err) {
        return err
    }).on('close', function() {
        console.log('data stream closed from mongo')
    });
});