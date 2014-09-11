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
},
  renderPerryAnalyzed: function( average, interpreter ){
   $(".katy-average-analyzing").hide();
   $('#katy-average').text( average.toFixedDown(4) );
   $('#katy-interpreter').text( interpreter );
}
 }





Number.prototype.toFixedDown = function( digits ) {
  var regularExp = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
    matchString = this.toString().match(regularExp);
     return matchString ? parseFloat(matchString[1]) : this.valueOf();
};










