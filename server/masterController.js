function MasterController(){}
    // this.io.sockets.emit( 'incoming', content, score )

MasterController.prototype.collect = function(data, score){
  console.log(data)
}

module.exports = MasterController;