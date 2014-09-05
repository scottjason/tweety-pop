var twitter = require('twitter')
  , sentiment = require('sentiment')
  , database = require('./mongoModel.js')
  , dotenv = require('dotenv')
    dotenv.load();

var popTracker = ["katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga"];

var TweetModel = function() {
  this.tweet = new twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
  });
}


TweetModel.prototype.stream = function() {
  // stream twitter, save to mongodb
  console.log('made it to sream')
  this.tweet.stream('statuses/filter', { "track": popTracker }, function(stream) {
      // stream.on('error', function(error) {
      // })
      stream.on('data', function(data) {
        if (data.id != null) {
          console.log(data)
        }
      });
    });
}

// TweetModel.prototype.parse = function() {
//   console.log(data)
//   // removes foreign characters from tweets, create sentiment score
//   var foreignCharacters = unescape(encodeURIComponent(data.text));
//   var tweetFormatted = decodeURIComponent(escape(foreignCharacters));
//   var score = sentiment(tweetFormatted).score

//   // declares conditions to save to database
//   if (score != 0) {
//     // renderTweet(tweetFormatted, score);

//     var newDocument = new Artist({
//       popStar: tweetFormatted,
//       tweetScore: score
//     });
//     newDocument.save(function(err) {
//       if (err) {
//         console.log(err)
//       }
//     })
//   }

// }

module.exports = new TweetModel();