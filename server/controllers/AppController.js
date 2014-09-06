var Artist = require('../models/dbModel.js')

module.exports = {

  initialize: function( io ) {
    this.io = io;
  },
  render: function( content, score ) {
    this.io.sockets.emit('renderTweet', content, score)
  },
  analyze: function(content, score){
    this.io.sockets.emit('analyzeTweet', content, score)
  },
  save: function( content, score ) {

    var newTweet = new Artist({
        popStar: content,
        tweetScore: score
      });

    newTweet.save(function( err ) {
      if (err) {
        console.log(err)
      }
    })
  }
}