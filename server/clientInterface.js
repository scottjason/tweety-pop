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
    perryPass: function( incomingScore ){
      this.perryScores.push( incomingScore );
        var allScores = new TweetScore( this.perryScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
        this.io.sockets.emit( 'perryAnalayzed', average, interpreter );
    },
    levinePass: function( incomingScore ){
      this.levineScores.push( incomingScore );
        var allScores = new TweetScore( this.levineScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
        this.io.sockets.emit( 'levineAnalyzed', average, interpreter );
    }
}
