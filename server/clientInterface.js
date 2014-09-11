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
    perryPass: function( incomingTweet, incomingScore ){
      this.perryScores.push( incomingScore );
        var allScores = new TweetScore( this.perryScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
          this.io.sockets.emit( 'perryAnalyzed', average, interpreter );
          this.io.sockets.emit( 'perryIncoming', incomingTweet, incomingScore );
    },
    levinePass: function( incomingTweet, incomingScore ){
      this.levineScores.push( incomingScore );
        var allScores = new TweetScore( this.levineScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
          this.io.sockets.emit( 'levineAnalyzed', average, interpreter );
          this.io.sockets.emit( 'levineIncoming', incomingTweet, incomingScore );
    },
    beyoncePass: function( incomingTweet, incomingScore ){
      this.beyonceScores.push( incomingScore );
        var allScores = new TweetScore( this.beyonceScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
          this.io.sockets.emit( 'beyonceAnalyzed', average, interpreter );
          this.io.sockets.emit( 'beyonceIncoming', incomingTweet, incomingScore );
    },
    bieberPass: function( incomingTweet, incomingScore ){
      this.bieberScores.push( incomingScore );
        var allScores = new TweetScore( this.bieberScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
          this.io.sockets.emit( 'bieberAnalyzed', average, interpreter );
          this.io.sockets.emit( 'bieberIncoming', incomingTweet, incomingScore );
    },
    rihannaPass: function( incomingTweet, incomingScore ){
      this.rihannaScores.push( incomingScore );
        var allScores = new TweetScore( this.rihannaScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
          this.io.sockets.emit( 'rihannaAnalyzed', average, interpreter );
          this.io.sockets.emit( 'rihannaIncoming', incomingTweet, incomingScore );

    },
    eminemPass: function( incomingTweet, incomingScore ){
      this.eminemScores.push( incomingScore );
        var allScores = new TweetScore( this.eminemScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
          this.io.sockets.emit( 'eminemAnalyzed', average, interpreter );
          this.io.sockets.emit( 'eminemIncoming', incomingTweet, incomingScore );
    },
    mileyPass: function( incomingTweet, incomingScore ){
      this.mileyScores.push( incomingScore );
        var allScores = new TweetScore( this.mileyScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
          this.io.sockets.emit( 'mileyAnalyzed', average, interpreter );
          this.io.sockets.emit( 'mileyIncoming', incomingTweet, incomingScore );
    },
    swiftPass: function( incomingTweet, incomingScore ){
      this.swiftScores.push( incomingScore );
        var allScores = new TweetScore( this.swiftScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
          this.io.sockets.emit( 'swiftAnalyzed', average, interpreter );
          this.io.sockets.emit( 'swiftIncoming', incomingTweet, incomingScore );
    },
    brunoPass: function( incomingTweet, incomingScore ){
      this.brunoScores.push( incomingScore );
        var allScores = new TweetScore( this.brunoScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
          this.io.sockets.emit( 'brunoAnalyzed', average, interpreter );
          this.io.sockets.emit( 'brunoIncoming', incomingTweet, incomingScore );
    },
    gagaPass: function( incomingTweet, incomingScore ){
      this.gagaScores.push( incomingScore );
        var allScores = new TweetScore( this.gagaScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
          this.io.sockets.emit( 'gagaAnalyzed', average, interpreter );
          this.io.sockets.emit( 'gagaIncoming', incomingTweet, incomingScore );
    },
    timberlakePass: function( incomingTweet, incomingScore ){
      this.timberlakeScores.push( incomingScore );
        var allScores = new TweetScore( this.timberlakeScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
          this.io.sockets.emit( 'timberlakeAnalyzed', average, interpreter );
          this.io.sockets.emit( 'timberlakeIncoming', incomingTweet, incomingScore );
    },
    lovatoPass: function( incomingTweet, incomingScore ){
      this.lovatoScores.push( incomingScore );
        var allScores = new TweetScore( this.lovatoScores )
        var average = allScores.avgScore();
        var interpreter = allScores.label( average );
          this.io.sockets.emit( 'lovatoAnalyzed', average, interpreter );
          this.io.sockets.emit( 'lovatoIncoming', incomingTweet, incomingScore );
    }
}
