var Artist = require('../models/dbModel.js')

module.exports = {

  initialize: function( io ) {
    this.io = io;
  },
  render: function( content, score ) {
    this.io.sockets.emit('renderTweet', content, score)
  },
  save: function( content, score ) {
    console.log(content, score)
  }
}