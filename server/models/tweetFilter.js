var interface = require('../interface.js')

module.exports = {
  filterArtist: function( newTweet, score ){
       if ( newTweet.toLowerCase().indexOf('perry') != -1 ) {
        interface.perryPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('bieber') != -1 ) {
        interface.bieberPass( newTweet, score );

    } else if (( newTweet.toLowerCase().indexOf('levine') != -1 || newTweet.toLowerCase().indexOf('maroon') != -1) ) {
        interface.levinePass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('beyonce') != -1 ) {
        interface.beyoncePass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('rihanna') != -1 ) {
        interface.rihannaPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('eminem') != -1 ) {
        interface.eminemPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('miley') != -1 ) {
        interface.mileyPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('kanye') != -1 ) {
        interface.kaynePass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('gaga') != -1 ) {
        interface.gagaPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('swift') != -1 ) {
        interface.swiftPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('timberlake') != -1 ) {
        interface.timberlakePass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('lovato') != -1 ) {
        interface.lovatoPass( newTweet, score );
    } else {}
  }
}



    // this.perryScores = [];
    // this.levineScores = [];
    // this.beyonceScores = [];
    // this.bieberScores = [];
    // this.rihannaScores = [];
    // this.eminemScores = [];
    // this.mileyScores = [];
    // this.kanyeScores = [];
    // this.gagaScores = [];
    // this.swiftScores = [];
    // this.timberlakeScores = [];
    // this.lovatoScores = [];
    // this.filterArtist( newTweet, score );
    // },