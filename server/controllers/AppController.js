module.exports = {

  initialize: function(io) {
    this.io = io;
  },
  pass: function(content, score) {
    this.io.sockets.emit('renderTweet', content, score)
    // console.log(this.io)
  }
}