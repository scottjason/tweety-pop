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
    },
    beyoncePass: function( incomingScore ){
      this.beyonceScores.push( incomingScore );
        var allScores = new TweetScore( this.beyonceScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
        this.io.sockets.emit( 'beyonceAnalyzed', average, interpreter );
    },
    bieberPass: function( incomingScore ){
      this.bieberScores.push( incomingScore );
        var allScores = new TweetScore( this.bieberScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
        this.io.sockets.emit( 'bieberAnalyzed', average, interpreter );
    }
}
