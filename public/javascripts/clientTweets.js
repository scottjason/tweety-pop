function TweetController(){}

TweetController.prototype = {
  bindSockets: function( socket ){
    socket.on('perryIncoming', this.renderPerryIncoming.bind( this ));
    socket.on('levineIncoming', this.renderLevineIncoming.bind( this ));
    socket.on('beyonceIncoming', this.renderBeyonceIncoming.bind( this ));
    socket.on('bieberIncoming', this.renderBieberIncoming.bind( this ));
    socket.on('rihannaIncoming', this.renderRihannaIncoming.bind( this ));
    socket.on('eminemIncoming', this.renderEminemIncoming.bind( this ));
    socket.on('mileyIncoming', this.renderMileyIncoming.bind( this ));
    socket.on('swiftIncoming', this.renderSwiftIncoming.bind( this ));
    socket.on('brunoIncoming', this.renderBrunoIncoming.bind( this ));
    socket.on('gagaIncoming', this.renderGagaIncoming.bind( this ));
    socket.on('timberlakeIncoming', this.renderTimberlakeIncoming.bind( this ));
    socket.on('lovatoIncoming', this.renderLovatoIncoming.bind( this ));
  },
   renderPerryIncoming: function( incomingTweet, incomingScore ) {
    console.log( incomingTweet, incomingScore )
  },
   renderLevineIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  },
   renderBeyonceIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  },
   renderBieberIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  },
   renderRihannaIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  },
   renderBeyonceIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  },
   renderRihannaIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  },
   renderEminemIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  },
   renderMileyIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  },
   renderSwiftIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  },
   renderBrunoIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  },
   renderGagaIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  },
   renderTimberlakeIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  },
   renderLovatoIncoming: function( incomingTweet, incomingScore ) {
console.log( incomingTweet, incomingScore )
  }
}

var tweetController = new TweetController();
