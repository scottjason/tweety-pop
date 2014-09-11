var clientInterface = require('../clientInterface.js')

module.exports = {
  filterArtist: function( newTweet, score ){
       if ( newTweet.toLowerCase().indexOf('perry') != -1 ) {
        clientInterface.perryPass( score );

    } else if ( newTweet.toLowerCase().indexOf('bieber') != -1 ) {
        clientInterface.bieberPass( score );

    } else if (( newTweet.toLowerCase().indexOf('levine') != -1 || newTweet.toLowerCase().indexOf('maroon') != -1) ) {
        clientInterface.levinePass( score );

    } else if ( newTweet.toLowerCase().indexOf('beyonce') != -1 ) {
        clientInterface.beyoncePass( score );

    } else if ( newTweet.toLowerCase().indexOf('rihanna') != -1 ) {
        clientInterface.rihannaPass( score );

    } else if ( newTweet.toLowerCase().indexOf('eminem') != -1 ) {
        clientInterface.eminemPass( score );

    } else if ( newTweet.toLowerCase().indexOf('miley') != -1 ) {
        clientInterface.mileyPass( score );
    } else if ( newTweet.toLowerCase().indexOf('bruno') != -1 ) {
        clientInterface.brunoPass( score );

    } else if ( newTweet.toLowerCase().indexOf('gaga') != -1 ) {
        clientInterface.gagaPass( score );

    } else if ( newTweet.toLowerCase().indexOf('swift') != -1 ) {
        clientInterface.swiftPass( score );

    } else if ( newTweet.toLowerCase().indexOf('timberlake') != -1 ) {
        clientInterface.timberlakePass( score );

    } else if ( newTweet.toLowerCase().indexOf('lovato') != -1 ) {
        clientInterface.lovatoPass( score );
    } else {}
  }
}


