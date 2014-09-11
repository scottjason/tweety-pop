var ArtistCollect = require('../controllers/artistCollect.js')

module.exports = {
  initialize: function( newTweet, score ) {
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
    this.filterArtist( newTweet, score );
    },
  filterArtist: function( newTweet, score ){
       if ( newTweet.toLowerCase().indexOf('perry') != -1 ) {
        this.perryScores.push( score );
        ArtistCollect.perryPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('bieber') != -1 ) {
        this.bieberScores.push( score );
        ArtistCollect.bieberPass( newTweet, score );

    } else if (( newTweet.toLowerCase().indexOf('levine') != -1 || newTweet.toLowerCase().indexOf('maroon') != -1) ) {
        this.levineScores.push( score );
        ArtistCollect.levinePass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('beyonce') != -1 ) {
        this.beyonceScores.push( score );
        ArtistCollect.beyoncePass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('rihanna') != -1 ) {
        this.rihannaScores.push( score );
        ArtistCollect.rihannaPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('eminem') != -1 ) {
        this.eminemScores.push( score );
        ArtistCollect.eminemPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('miley') != -1 ) {
        this.mileyScores.push( score );
        ArtistCollect.mileyPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('kanye') != -1 ) {
        this.kanyeScores.push( score );
        ArtistCollect.kaynePass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('gaga') != -1 ) {
        this.gagaScores.push( score );
        ArtistCollect.gagaPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('swift') != -1 ) {
        this.swiftScores.push( score );
        ArtistCollect.swiftPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('timberlake') != -1 ) {
        this.timberlakeScores.push( score );
        ArtistCollect.timberlakePass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('lovato') != -1 ) {
        this.lovatoScores.push( score );
        ArtistCollect.lovatoPass( newTweet, score );
    } else {}
  }
}