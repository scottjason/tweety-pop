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