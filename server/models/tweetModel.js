var twitter = require('twitter')
  , sentiment = require('sentiment')
  , dotenv = require('dotenv');
    dotenv.load();

var popTracker = ["katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga"];

TweetModel.prototype.stream = function(){
    this.tweet.stream('statuses/filter', { "track": popTracker }, function( stream ) {
      stream.on('data', function( data ) {
        if (data.id != null) {
         return data;
        }
      });
      stream.on('error', function( error ) {
        console.log( error )
      });
    })
  }

function TweetModel(){
  this.tweet = new twitter({
      consumer_key: process.env.consumer_key,
      consumer_secret: process.env.consumer_secret,
      access_token_key: process.env.access_token_key,
      access_token_secret: process.env.access_token_secret
    });
}

module.exports = TweetModel;
















// TweetModel.prototype.parseData = function() {
// var data = this.stream()
// console.log(data)
// var foreignCharacters = unescape(encodeURIComponent(this.data.text));
// var tweetFormatted = decodeURIComponent(escape(foreignCharacters));
// var score = sentiment(tweetFormatted).score

// declares conditions to save to base
// if (score != 0) {
// renderTweet(tweetFormatted, score);

// var newDocument = new Artist({
//   popStar: tweetFormatted,
//   tweetScore: score
// });
// newDocument.save(function(err) {
//   if (err) {
//     console.log(err)
//   }
// })
// }