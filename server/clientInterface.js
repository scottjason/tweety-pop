var TweetScore = require('./models/tweetScore.js');

module.exports = {
    perryScores: [],
    levineScores: [],
    beyonceScores: [],
    bieberScores: [],
    rihannaScores: [],
    eminemScores: [],
    mileyScores: [],
    kanyeScores: [],
    gagaScores: [],
    swiftScores: [],
    timberlakeScores: [],
    lovatoScores: [],

    initialize: function( io ){
    this.io = io;

    },
    perryPass: function( newTweet, incomingScore ){
      this.perryScores.push( incomingScore );
      var scoreResults = new TweetScore( this.perryScores );
        // this.io.sockets.emit('perryPass', scoreResults )
        console.log( this.perryScores.length );
    }
}
