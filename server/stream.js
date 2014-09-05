// var Twitter = require('twitter')
//   , sentiment = require('sentiment')
//   , dotenv = require('dotenv')
//   , app = require('./app.js')

//     dotenv.load();

// var popTracker = ["katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga"];

// module.exports = {
//   initialize: function() {
//     this.tweet = new Twitter({
//       consumer_key: process.env.consumer_key,
//       consumer_secret: process.env.consumer_secret,
//       access_token_key: process.env.access_token_key,
//       access_token_secret: process.env.access_token_secret
//     });
//     this.stream()
//   },
//   stream: function() {

//     this.tweet.stream('statuses/filter', { "track": popTracker }, function( stream ) {
//       stream.on('data', function( data ) {
//         if (data.id != null) {
//          // console.log(data.text)
//         }
//       });
//       stream.on('error', function( error ) {
//         console.log( error )
//       });
//     })
//   }
// }


















// // TweetModel.prototype.parseData = function() {
// // var data = this.stream()
// // console.log(data)
// // var foreignCharacters = unescape(encodeURIComponent(this.data.text));
// // var tweetFormatted = decodeURIComponent(escape(foreignCharacters));
// // var score = sentiment(tweetFormatted).score

// // declares conditions to save to base
// // if (score != 0) {
// // renderTweet(tweetFormatted, score);

// // var newDocument = new Artist({
// //   popStar: tweetFormatted,
// //   tweetScore: score
// // });
// // newDocument.save(function(err) {
// //   if (err) {
// //     console.log(err)
// //   }
// // })
// // }