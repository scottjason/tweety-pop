var TweetScore = require('./tweetScore.js');

function TweetFilter() {}

module.exports = {
  initialize: function( content, score ) {
    this.perryScore = [];
    this.levingScores = [];
    this.beyonceScores = [];
    this.bieberScores = [];
    this.rihannaScores = [];
    this.eminemScores = [];
    this.mileyScores = [];
    this.kanyeScores = [];
    this.gagaScores = [];
    this.swiftScores = [];
    this.timberlakeScores = [];
    this.lovatoScores = [];
    this.filterArtist( content, score );
    },
    filterArtist: function( content, score ){
      console.log( content, score )
    }
}