module.exports = {

  initialize: function(io) {
    this.io = io;
  },
  listen: function() {
    this.io.sockets.emit()
    // console.log(this.io)
  }

}