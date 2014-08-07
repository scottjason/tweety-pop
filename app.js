var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    util = require('util'),
    twitter = require('twitter'),
    sentiment = require('sentiment')

// var wordTracker = "barack obama"


server.listen(3000);
console.log("Node server started. Listening on port: 3000")


app.use('/', express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
    search = req.query || "";
});


tweet = new twitter({
    consumer_key: "Qz8vqLjcmgxOjhUpwd3hD2ZCw",
    consumer_secret: "vRSxeLjj2pddubDxkpaZ1bqsonC0SrWsx9xMaBw91U2P8N42J2",
    access_token_key: "195177239-1NI8bL9utZ2MnNXowy607mYLABlH83gp4k9TAgrA",
    access_token_secret: "ZVusxwm9y4aJCnvtx3MHj7148REZikXyySeZURZsLUVGz"
});


io.sockets.on('connection', function() {
    // var words = 'great american music hall, fillmore, bottom of the hill, ruby skye, asiasf, crazy horse, press club, supperclub, public works, city nights, presidio social club, cobbs comedy club, sloane, slow club, club quarters, smugglers cove, f8, vessel, bootie, academy of the scienes, monroe, popscene, icon ultra lounge, penthouse club, Mezzanine, hungry club'
        var words = 'barack obama, obama'
    tweet.stream('statuses/filter', {
        "language": 'en',
        "track": words
        // "locations": "-122.75,36.8,-121.75,37.8"
    },

        function(stream) {
            stream.on('data', function(data) {
                if (data.id != null) {
                    io.sockets.emit('message', data, sentiment(data.text));
                }
            });
        });
});
