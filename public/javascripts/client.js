$(document).ready(function(){
    TweetController = new TweetController


})

function TweetController(){
    this.socket = io.connect()
    this.bindSockets()
  }


TweetController.prototype = {
  bindSockets: function(){
    this.socket.on('perryAnalayzed', this.renderPerryAnalyzed.bind( this ) );
    this.socket.on('levineAnalyzed', this.renderLevineAnalyzed.bind( this ) );
},
  truncateDigits: function( average, digits ){
    var numString = average.toString(),
        decimalPosition = numString.indexOf('.'),
        substrLength = decimalPosition == -1 ? numString.length : 1 + decimalPosition + digits,
        trimmedResult = numString.substr( 0, substrLength ),
        finalResult = isNaN( trimmedResult ) ? 0 : trimmedResult;
    return parseFloat( finalResult );
  },
  renderPerryAnalyzed: function( average, interpreter ){
   $(".katy-average-analyzing").hide();
   $('#katy-average').text( this.truncateDigits( average, 4) );
   $('#katy-interpreter').text( interpreter );
 },
  renderLevineAnalyzed: function( average, interpreter ){
   $(".levine-average-analyzing").hide();
   $('#levine-average').text( this.truncateDigits( average, 4) );
   $('#levine-interpreter').text( interpreter );
 }
}
















