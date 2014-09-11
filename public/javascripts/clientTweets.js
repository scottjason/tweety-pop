function TweetController(){}

TweetController.prototype = {
  bindSockets: function( socket ){
    socket.on('perryIncoming', this.renderPerryIncoming.bind( this ));
    socket.on('levineIncoming', this.renderLevineIncoming.bind( this ));
    socket.on('beyonceIncoming', this.renderBeyonceIncoming.bind( this ));
    socket.on('bieberIncoming', this.renderBieberIncoming.bind( this ));
    socket.on('rihannaIncoming', this.renderRihannaIncoming.bind( this ));
    socket.on('eminemIncoming', this.renderEminemIncoming.bind( this ));
    socket.on('mileyIncoming', this.renderMileyIncoming.bind( this ));
    socket.on('swiftIncoming', this.renderSwiftIncoming.bind( this ));
    socket.on('brunoIncoming', this.renderBrunoIncoming.bind( this ));
    socket.on('gagaIncoming', this.renderGagaIncoming.bind( this ));
    socket.on('timberlakeIncoming', this.renderTimberlakeIncoming.bind( this ));
    socket.on('lovatoIncoming', this.renderLovatoIncoming.bind( this ));
  },
   renderPerryIncoming: function( incomingTweet, incomingScore ) {
    $(".katie-score-loading").hide();
    $(".katy").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
     });
    $("#katy-incoming").fadeOut(function() {
     $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderLevineIncoming: function( incomingTweet, incomingScore ) {
    $(".levine-score-loading").hide();
    $(".levine").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
     });
    $("#levine-incoming").fadeOut(function() {
    $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderBeyonceIncoming: function( incomingTweet, incomingScore ) {
    $(".beyonce-score-loading").hide();
    $(".beyonce").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
    });
    $("#beyonce-incoming").fadeOut(function() {
     $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderBieberIncoming: function( incomingTweet, incomingScore ) {
    $(".bieber-score-loading").hide();
    $(".bieber").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
    });
    $("#bieber-incoming").fadeOut(function() {
     $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderRihannaIncoming: function( incomingTweet, incomingScore ) {
    $(".rihanna-score-loading").hide();
    $(".rihanna").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
    });
    $("#rihanna-incoming").fadeOut(function() {
     $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderBeyonceIncoming: function( incomingTweet, incomingScore ) {
    $(".beyonce-score-loading").hide();
    $(".beyonce").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
    });
    $("#beyonce-incoming").fadeOut(function() {
     $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderRihannaIncoming: function( incomingTweet, incomingScore ) {
    $(".rihanna-score-loading").hide();
    $(".rihanna").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
    });
    $("#rihanna-incoming").fadeOut(function() {
     $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderEminemIncoming: function( incomingTweet, incomingScore ) {
    $(".eminem-score-loading").hide();
    $(".eminem").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
    });
    $("#eminem-incoming").fadeOut(function() {
     $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderMileyIncoming: function( incomingTweet, incomingScore ) {
    $(".miley-score-loading").hide();
    $(".miley").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
     });
    $("#miley-incoming").fadeOut(function() {
     $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderSwiftIncoming: function( incomingTweet, incomingScore ) {
    $(".swift-score-loading").hide();
    $(".swift").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
    });
    $("#swift-incoming").fadeOut(function() {
     $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderBrunoIncoming: function( incomingTweet, incomingScore ) {
    $(".bruno-score-loading").hide();
    $(".bruno").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
    });
    $("#bruno-incoming").fadeOut(function() {
     $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderGagaIncoming: function( incomingTweet, incomingScore ) {
    $(".gaga-score-loading").hide();
    $(".gaga").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
    });
    $("#gaga-incoming").fadeOut(function() {
     $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderTimberlakeIncoming: function( incomingTweet, incomingScore ) {
    $(".timberlake-score-loading").hide();
    $(".timberlake").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
    });
    $("#timberlake-incoming").fadeOut(function() {
     $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  },
   renderLovatoIncoming: function( incomingTweet, incomingScore ) {
    $(".lovato-score-loading").hide();
    $(".lovato").fadeOut(function() {
     $( this ).text( incomingTweet ).fadeIn( 3000 );
    });
    $("#lovato-incoming").fadeOut(function() {
    $( this ).text( incomingScore ).fadeIn( 3000 );
   });
  }
};

var tweetController = new TweetController();
