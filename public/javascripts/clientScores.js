$(document).ready(function(){
    TweetController = new TweetController
});

function TweetController(){
    this.socket = io.connect()
    this.bindSockets()
};

TweetController.prototype = {
  bindSockets: function(){
    this.socket.on('perryAnalayzed', this.renderPerryAnalyzed.bind( this ));
    this.socket.on('levineAnalyzed', this.renderLevineAnalyzed.bind( this ));
    this.socket.on('beyonceAnalyzed', this.renderBeyonceAnalyzed.bind( this ));
    this.socket.on('bieberAnalyzed', this.renderBieberAnalyzed.bind( this ));
    this.socket.on('rihannaAnalyzed', this.renderRihannaAnalyzed.bind( this ));
    this.socket.on('eminemAnalyzed', this.renderEminemAnalyzed.bind( this ));
    this.socket.on('mileyAnalyzed', this.renderMileyAnalyzed.bind( this ));
    this.socket.on('swiftAnalyzed', this.renderSwiftAnalyzed.bind( this ));
    this.socket.on('brunoAnalyzed', this.renderBrunoAnalyzed.bind( this ));
    this.socket.on('gagaAnalyzed', this.renderGagaAnalyzed.bind( this ));
    this.socket.on('timberlakeAnalyzed', this.renderTimberlakeAnalyzed.bind( this ));
    this.socket.on('lovatoAnalyzed', this.renderLovatoAnalyzed.bind( this ));
},
  renderPerryAnalyzed: function( average, interpreter ){
   $(".katy-average-analyzing").hide();
   $('#katy-average').text( average.toFixedDown(4) );
   $('#katy-interpreter').text( interpreter );
 },
  renderLevineAnalyzed: function( average, interpreter ){
   $(".levine-average-analyzing").hide();
   $('#levine-average').text( average.toFixedDown(4) );
   $('#levine-interpreter').text( interpreter );
 },
  renderBeyonceAnalyzed: function( average, interpreter ){
   $(".beyonce-average-analyzing").hide();
   $('#beyonce-average').text( average.toFixedDown(4) );
   $('#beyonce-interpreter').text( interpreter );
 },
 renderBieberAnalyzed: function( average, interpreter ){
   $(".bieber-average-analyzing").hide();
   $('#bieber-average').text( average.toFixedDown(4) );
   $('#bieber-interpreter').text( interpreter );
 },
   renderRihannaAnalyzed: function( average, interpreter ){
   $(".rihanna-average-analyzing").hide();
   $('#rihanna-average').text( average.toFixedDown(4) );
   $('#rihanna-interpreter').text( interpreter );
 },
   renderEminemAnalyzed: function( average, interpreter ){
   $(".eminem-average-analyzing").hide();
   $('#eminem-average').text( average.toFixedDown(4) );
   $('#eminem-interpreter').text( interpreter );
 },
  renderMileyAnalyzed: function( average, interpreter ){
   $(".miley-average-analyzing").hide();
   $('#miley-average').text( average.toFixedDown(4) );
   $('#miley-interpreter').text( interpreter );
 },
  renderSwiftAnalyzed: function( average, interpreter ){
   $(".swift-average-analyzing").hide();
   $('#swift-average').text( average.toFixedDown(4) );
   $('#swift-interpreter').text( interpreter );
 },
  renderBrunoAnalyzed: function( average, interpreter ){
   $(".bruno-average-analyzing").hide();
   $('#bruno-average').text( average.toFixedDown(4) );
   $('#bruno-interpreter').text( interpreter );
 },
  renderGagaAnalyzed: function( average, interpreter ){
   $(".gaga-average-analyzing").hide();
   $('#gaga-average').text( average.toFixedDown(4) );
   $('#gaga-interpreter').text( interpreter );
 },
  renderTimberlakeAnalyzed: function( average, interpreter ){
   $(".timberlake-average-analyzing").hide();
   $('#timberlake-average').text( average.toFixedDown(4) );
   $('#timberlake-interpreter').text( interpreter );
 },
  renderLovatoAnalyzed: function( average, interpreter ){
   $(".lovato-average-analyzing").hide();
   $('#lovato-average').text( average.toFixedDown(4) );
   $('#lovato-interpreter').text( interpreter );
 }
}

Number.prototype.toFixedDown = function( digits ) {
        var regularExp = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        matchString = this.toString().match(regularExp);
        return matchString ? parseFloat( matchString[1]) : this.valueOf();
};