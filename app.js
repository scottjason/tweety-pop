var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    util = require('util'),
    twitter = require('twitter'),
    sentiment = require('sentiment'),
    env = require('node-env-file')


server.listen(3000);
console.log("Node server started. Listening on port: 3000")


app.use('/', express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
    search = req.query || "";
});


tweet = new twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
});

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
                    io.sockets.emit('message', newTweet, sentiment(newTweet));
                }
            });
        });
});