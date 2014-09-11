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
    var allScores = new TweetScore( this.perryScores )
      var average = allScores.avgScore();

      // var interpreter = TweetScore.label( this.perryScores  );
        // this.io.sockets.emit('perryPass', scoreResults )
        console.log( average );
    }
}
