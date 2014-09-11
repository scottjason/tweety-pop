Artist = require('../models/dbModel.js');

module.exports = {
  initialize: function( io ) {
    this.io = io;
  },
  render: function( content, score ) {
    this.io.sockets.emit( 'renderTweet', content, score )
  },
  analyze: function( content, score ){
    this.io.sockets.emit( 'analyzeTweet', content, score )
  },
  save: function( content, score ) {
    var newTweet = new Artist ( { popStar: content, tweetScore: score } );
        newTweet.save(function( err ) { if ( err ) { console.error( err ) }
    })
  },
  query: function() {
  Artist.find({}).limit(50).exec(function( err, docs ) {
    if ( err ) return console.error( err );
      for (var i = 0; i < docs.length; i++) {
    this.analyze( docs[i].popStar, docs[i].tweetScore )
     }
   }.bind( this ));
     setTimeout( this.query.bind( this ) , 3000 );
  },
   handler: function( error ){
    console.error( error );
 }
}

