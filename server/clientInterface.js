var TweetScore = require('./models/tweetScore.js');

module.exports = {
    initialize: function( io ){
    this.io = io;
    this.perryScores = [];
    this.levineScores = [];
    this.beyonceScores = [];
    this.bieberScores = [];
    this.rihannaScores = [];
    this.eminemScores = [];
    this.mileyScores = [];
    this.brunoScores = [];
    this.gagaScores = [];
    this.swiftScores = [];
    this.timberlakeScores = [];
    this.lovatoScores = [];
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
    },
    rihannaPass: function( incomingScore ){
      this.rihannaScores.push( incomingScore );
        var allScores = new TweetScore( this.rihannaScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
        this.io.sockets.emit( 'rihannaAnalyzed', average, interpreter );
    },
    eminemPass: function( incomingScore ){
      this.eminemScores.push( incomingScore );
        var allScores = new TweetScore( this.eminemScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
        this.io.sockets.emit( 'eminemAnalyzed', average, interpreter );
    },
    mileyPass: function( incomingScore ){
      this.mileyScores.push( incomingScore );
        var allScores = new TweetScore( this.mileyScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
        this.io.sockets.emit( 'mileyAnalyzed', average, interpreter );
    },
    swiftPass: function( incomingScore ){
      this.swiftScores.push( incomingScore );
        var allScores = new TweetScore( this.swiftScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
        this.io.sockets.emit( 'swiftAnalyzed', average, interpreter );
    },
    brunoPass: function( incomingScore ){
      this.brunoScores.push( incomingScore );
        var allScores = new TweetScore( this.brunoScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
        this.io.sockets.emit( 'brunoAnalyzed', average, interpreter );
    },
    gagaPass: function( incomingScore ){
      this.gagaScores.push( incomingScore );
        var allScores = new TweetScore( this.gagaScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
        this.io.sockets.emit( 'gagaAnalyzed', average, interpreter );
    },
    timberlakePass: function( incomingScore ){
      this.timberlakeScores.push( incomingScore );
        var allScores = new TweetScore( this.timberlakeScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
        this.io.sockets.emit( 'timberlakeAnalyzed', average, interpreter );
    },
    lovatoPass: function( incomingScore ){
      this.lovatoScores.push( incomingScore );
        var allScores = new TweetScore( this.lovatoScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
        this.io.sockets.emit( 'lovatoAnalyzed', average, interpreter );
    }
}
