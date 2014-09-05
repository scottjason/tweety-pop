// // var database = require('../controllers/mongoController.js')

// module.exports = {

//   save: function() {
//     var foreignCharacters = unescape(encodeURIComponent(data.text));
//     var tweetFormatted = decodeURIComponent(escape(foreignCharacters));
//     var score = sentiment(tweetFormatted).score

//     if (score != 0) {

//       var newDocument = new Artist({
//         popStar: tweetFormatted,
//         tweetScore: score
//       });
//       newDocument.save(function(err) {
//         if (err) {
//           console.log(err)
//         }
//       })
//     }
//   }

// }

// TweetModel.prototype.parseData = function() {
// var data = this.stream()
// console.log(data)
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