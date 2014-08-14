// require modules
require('newrelic')
var Array = require('node-array');
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    twitter = require('twitter'),
    sentiment = require('sentiment'),
    env = require('node-env-file'),
    mongoose = require('mongoose');



// declare artists
var popTracker = [ "katy perry, eminem, justin bieber, beyonce, taylor swift, jtimberlake, timberlake, adam levine, adamlevine, maroon 5, bruno mars, miley cyrus, rihanna, demi lovato, lady gaga" ];

// declare artist score arrays
var perryScores = [];
var levineScores = [];
var beyonceScores = [];
var bieberScores = [];
var rihannaScores = [];
var eminemScores = [];
var mileyScores = [];
var brunoScores = [];
var gagaScores = [];
var swiftScores = [];
var timberlakeScores = [];
var lovatoScores = [];

// initiate server connection
var port = process.env.PORT || 3000;
server.listen(port, function() {
console.log("Listening on " + port);
});

// initiate database connection
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };

mongoose.connect("mongodb://heroku_app28482092:tj98slsjoiakhud0ok64qm016a@ds033559.mongolab.com:33559/heroku_app28482092", function(err) {
  if (err) { throw err }
  else { console.log("Successfully initiated database connection") }
});

// create schema
var tweetSchema = mongoose.Schema(
    { popStar: { type: String }, tweetScore: { type: Number } },
    { capped: { size: 2000000, max: 10000, autoIndexId: true } }
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
    consumer_key: "Qz8vqLjcmgxOjhUpwd3hD2ZCw",
    consumer_secret: "vRSxeLjj2pddubDxkpaZ1bqsonC0SrWsx9xMaBw91U2P8N42J2",
    access_token_key: "195177239-1NI8bL9utZ2MnNXowy607mYLABlH83gp4k9TAgrA",
    access_token_secret: "ZVusxwm9y4aJCnvtx3MHj7148REZikXyySeZURZsLUVGz"
});

// stream incoming tweets, write to database, emit to client
io.sockets.on('connection', function() {
  tweet.stream('statuses/filter', { "track": popTracker },
    function(stream) {
      stream.on('data', function(data) {
      // remove foreign characters from tweets
      var newTweet = data.text;
      var foreignCharacters = unescape(encodeURIComponent(newTweet));
      newTweet = decodeURIComponent(escape(foreignCharacters));

      if (data.id != null) {
      var newScore = new Rating ( { popStar: newTweet, tweetScore: sentiment(newTweet).score } )
      newScore.save(function(err) { if (err) { throw err } } )
      io.sockets.emit('message', newTweet, sentiment(newTweet).score) }
  });
      // stream the database, emit to client
      var stream = Rating.find().stream();
      stream.on('data', function(doc)  {
      if (doc.popStar.indexOf('perry') != -1 && doc.tweetScore != 0)
    {
      this.pause()
      var self = this
      perryScores.push(doc.tweetScore);
      io.sockets.emit('perryScoreArray', perryScores);
      self.resume()
    }
      else if (doc.popStar.indexOf('bieber') != -1 && doc.tweetScore != 0)
    {
      this.pause()
      var self = this
      bieberScores.push(doc.tweetScore);
      io.sockets.emit('bieberScoreArray', bieberScores);
      self.resume()
    }
      else if ((doc.popStar.indexOf('levine') != -1 || doc.popStar.indexOf('maroon') != -1) && doc.tweetScore != 0)
    {
      this.pause()
      var self = this
      levineScores.push(doc.tweetScore);
      io.sockets.emit('levineScoreArray', levineScores);
      self.resume()
    }
      else if (doc.popStar.indexOf('beyonce') != -1 && doc.tweetScore != 0)
    {
      this.pause()
      var self = this
      beyonceScores.push(doc.tweetScore);
      io.sockets.emit('beyonceScoreArray', beyonceScores);
      self.resume()
    }
    else if (doc.popStar.indexOf('rihanna') != -1 && doc.tweetScore != 0)
    {
      this.pause()
      var self = this
      rihannaScores.push(doc.tweetScore);
      io.sockets.emit('rihannaScoreArray', rihannaScores);
      self.resume()
    }
    else if (doc.popStar.indexOf('eminem') != -1 && doc.tweetScore != 0)
    {
      this.pause()
      var self = this
      eminemScores.push(doc.tweetScore);
      io.sockets.emit('eminemScoreArray', eminemScores);
      self.resume()
    }
    else if (doc.popStar.indexOf('miley') != -1 && doc.tweetScore != 0)
    {
      this.pause()
      var self = this
      mileyScores.push(doc.tweetScore);
      io.sockets.emit('mileyScoreArray', mileyScores);
      self.resume()
    }
    else if (doc.popStar.indexOf('bruno') != -1 && doc.tweetScore != 0)
    {
      this.pause()
      var self = this
      brunoScores.push(doc.tweetScore);
      io.sockets.emit('brunoScoreArray', brunoScores);
      self.resume()
    }
    else if (doc.popStar.indexOf('gaga') != -1 && doc.tweetScore != 0)
    {
      this.pause()
      var self = this
      gagaScores.push(doc.tweetScore);
      io.sockets.emit('gagaScoreArray', gagaScores);
      self.resume()
    }
    else if (doc.popStar.indexOf('swift') != -1 && doc.tweetScore != 0)
    {
      this.pause()
      var self = this
      swiftScores.push(doc.tweetScore);
      io.sockets.emit('swiftScoreArray', swiftScores);
      self.resume()
    }
    else if (doc.popStar.indexOf('timberlake') != -1 && doc.tweetScore != 0)
    {
      this.pause()
      var self = this
      timberlakeScores.push(doc.tweetScore);
      io.sockets.emit('timberlakeScoreArray', timberlakeScores);
      self.resume()
    }
    else if (doc.popStar.indexOf('lovato') != -1 && doc.tweetScore != 0)
    {
      this.pause()
      var self = this
      lovatoScores.push(doc.tweetScore);
      io.sockets.emit('lovatoScoreArray', lovatoScores);
      self.resume()
    }
    else { console.log ('.. analyzing data stream ..') }

    }).on('error', function (err) { { throw err }

    }).on('close', function () {
      console.log('database stream closed')
    });
   });

});
