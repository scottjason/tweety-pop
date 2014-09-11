var clientInterface = require('../clientInterface.js')

module.exports = {
  filterArtist: function( newTweet, score ){
       if ( newTweet.toLowerCase().indexOf('perry') != -1 ) {
        clientInterface.perryPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('bieber') != -1 ) {
        clientInterface.bieberPass( newTweet, score );

    } else if (( newTweet.toLowerCase().indexOf('levine') != -1 || newTweet.toLowerCase().indexOf('maroon') != -1) ) {
        clientInterface.levinePass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('beyonce') != -1 ) {
        clientInterface.beyoncePass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('rihanna') != -1 ) {
        clientInterface.rihannaPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('eminem') != -1 ) {
        clientInterface.eminemPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('miley') != -1 ) {
        clientInterface.mileyPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('bruno') != -1 ) {
        clientInterface.brunoPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('gaga') != -1 ) {
        clientInterface.gagaPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('swift') != -1 ) {
        clientInterface.swiftPass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('timberlake') != -1 ) {
        clientInterface.timberlakePass( newTweet, score );

    } else if ( newTweet.toLowerCase().indexOf('lovato') != -1 ) {
        clientInterface.lovatoPass( newTweet, score );
    } else {}
  }
}