var ArtistCollect = require('../artistCollect.js')

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

  filterArtist: function( newTweet, score ){
       if ( newTweet.toLowerCase().indexOf('perry') != -1 ) {
      perryScores.push( score );
    } else if ( newTweet.toLowerCase().indexOf('bieber') != -1 ) {
      bieberScores.push( score );
    } else if (( newTweet.toLowerCase().indexOf('levine') != -1 || newTweet.toLowerCase().indexOf('maroon') != -1) ) {
      levineScores.push( score );
    } else if ( newTweet.toLowerCase().indexOf('beyonce') != -1 ) {
      beyonceScores.push( score );
    } else if ( newTweet.toLowerCase().indexOf('rihanna') != -1 ) {
      rihannaScores.push( score );
    } else if ( newTweet.toLowerCase().indexOf('eminem') != -1 ) {
      eminemScores.push( score );
    } else if ( newTweet.toLowerCase().indexOf('miley') != -1 ) {
      mileyScores.push( score );
    } else if ( newTweet.toLowerCase().indexOf('kanye') != -1 ) {
      kanyeScores.push( score );
    } else if ( newTweet.toLowerCase().indexOf('gaga') != -1 ) {
      gagaScores.push( score );
    } else if ( newTweet.toLowerCase().indexOf('swift') != -1 ) {
      swiftScores.push( score );
    } else if ( newTweet.toLowerCase().indexOf('timberlake') != -1 ) {
      timberlakeScores.push( score );
    } else if ( newTweet.toLowerCase().indexOf('lovato') != -1 ) {
      lovatoScores.push( score );
    } else {}
  }
}