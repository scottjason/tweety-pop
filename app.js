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
    var wordsToTrack = ["katy perry, eminem, justin bieber, beyonce, taylor swift, jay z, drake, usher, kanye, jtimberlake, timberlake, love, bruno mars, miley cyrus, rihanna"]
    tweet.stream('statuses/filter', {
            "track": wordsToTrack
        },
        function(stream) {
            stream.on('data', function(data) {
                if (data.text != null) {
                    io.sockets.emit('message', data.text, sentiment(data.text));
                }
            });
        });
});