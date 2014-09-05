// var data = ""
var database = require('../controllers/mongoController.js')

module.exports = function() {
  return {
  // saves incoming tweets to mongo
  save: function() {
    // removes foreign characters from tweets, create sentiment score
    var foreignCharacters = unescape(encodeURIComponent(data.text));
    var tweetFormatted = decodeURIComponent(escape(foreignCharacters));
    var score = sentiment(tweetFormatted).score

    // declares conditions to save to database
    if (score != 0) {
      // renderTweet(tweetFormatted, score);

      var newDocument = new Artist({
        popStar: tweetFormatted,
        tweetScore: score
      });
      newDocument.save(function(err) {
        if (err) {
          console.log(err)
        }
      })
    }
  }
 }
}