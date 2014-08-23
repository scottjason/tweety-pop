// require modules
require('newrelic')
var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  twitter = require('twitter'),
  sentiment = require('sentiment'),
  env = require('node-env-file'),
  mongoose = require('mongoose');

// declare artists
var popTracker = ["katy perry, eminem, justin bieber, beyonce, taylor swift, jtimberlake, timberlake, adam levine, adamlevine, maroon 5, kaynewest, kanye west, miley cyrus, rihanna, demi lovato, lady gaga"];

// declare artist score arrays
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

// initiate server connection
var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log("Listening on " + port);
});

// declare public folder
app.use('/', express.static(__dirname + '/public'));

// declare routes, query database, emit results on query complettion
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
  search = req.query || "";
  // Rating.find( {} ).limit(1000).exec(queryCallBack)
  var tweetQuery = Rating.find({}).limit(1000);
  tweetQuery.exec(function(err, docs) {
    io.sockets.emit('queryLoaded', docs);
  });
});

// create database schema
var tweetSchema = mongoose.Schema({
  popStar: {
    type: String
  },
  tweetScore: {
    type: Number
  }
}, {
  capped: {
    size: 2000000,
    max: 10000,
    autoIndexId: true
  }
});

// create model Rating and 'score' collection
var Rating = mongoose.model('score', tweetSchema);

// initiate database connection options
var options = {
  server: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  }
};

// initiate database connection
mongoose.connect("mongodb://scottjason:tweetypop084@ds033559.mongolab.com:33559/heroku_app28482092", function(err) {
  if (!err) {
    console.log("Successfully initiated database connection.");
  }
});

// twitter authorization
tweet = new twitter({
  consumer_key: "Qz8vqLjcmgxOjhUpwd3hD2ZCw",
  consumer_secret: "vRSxeLjj2pddubDxkpaZ1bqsonC0SrWsx9xMaBw91U2P8N42J2",
  access_token_key: "195177239-1NI8bL9utZ2MnNXowy607mYLABlH83gp4k9TAgrA",
  access_token_secret: "ZVusxwm9y4aJCnvtx3MHj7148REZikXyySeZURZsLUVGz"
});

// stream incoming tweets
tweet.stream('statuses/filter', {
    "track": popTracker
  },
  function(stream) {
    stream.on('data', function(data) {

      // remove foreign characters from tweets
      var newTweet = data.text;
      var foreignCharacters = unescape(encodeURIComponent(newTweet));
      newTweet = decodeURIComponent(escape(foreignCharacters));

      if (newTweet != null) {
        var score = sentiment(newTweet).score

        if (score != 0) {
          var newScore = new Rating({
            popStar: newTweet,
            tweetScore: score
          })
          newScore.save(function(err) {
            if (err) {
              throw err
            }
          })
        }

        analyzeTweet(newTweet, score)
        io.sockets.emit('message', newTweet, score)
      }
    })

    function analyzeTweet(doc, score) {
      if (doc.indexOf('perry') != -1 && score != 0) {
        perryScores.push(score);
        io.sockets.emit('perryScoreArray', perryScores);
      } else if (doc.indexOf('bieber') != -1 && score != 0) {
        bieberScores.push(score);
        io.sockets.emit('bieberScoreArray', bieberScores);
      } else if ((doc.indexOf('levine') != -1 || doc.indexOf('maroon') != -1) && score != 0) {
        levineScores.push(score);
        io.sockets.emit('levineScoreArray', levineScores);
      } else if (doc.indexOf('beyonce') != -1 && score != 0) {
        beyonceScores.push(score);
        io.sockets.emit('beyonceScoreArray', beyonceScores);
      } else if (doc.indexOf('rihanna') != -1 && score != 0) {
        rihannaScores.push(score);
        io.sockets.emit('rihannaScoreArray', rihannaScores);
      } else if (doc.indexOf('eminem') != -1 && score != 0) {
        eminemScores.push(score);
        io.sockets.emit('eminemScoreArray', eminemScores);
      } else if (doc.indexOf('miley') != -1 && score != 0) {
        mileyScores.push(score);
        io.sockets.emit('mileyScoreArray', mileyScores);
      } else if (doc.indexOf('kanye') != -1 && score != 0) {
        kanyeScores.push(score);
        io.sockets.emit('kanyeScoreArray', kanyeScores);
      } else if (doc.indexOf('gaga') != -1 && score != 0) {
        gagaScores.push(score);
        io.sockets.emit('gagaScoreArray', gagaScores);
      } else if (doc.indexOf('swift') != -1 && score != 0) {
        swiftScores.push(score);
        io.sockets.emit('swiftScoreArray', swiftScores);
      } else if (doc.indexOf('timberlake') != -1 && score != 0) {
        timberlakeScores.push(score);
        io.sockets.emit('timberlakeScoreArray', timberlakeScores);
      } else if (doc.indexOf('lovato') != -1 && score != 0) {
        lovatoScores.push(score);
        io.sockets.emit('lovatoScoreArray', lovatoScores);
      } else {
        console.log('.. analyzing data stream ..')
      }
    }
  })