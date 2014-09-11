 var Artist = require('../models/dbModel.js')
  , tweetFilter = require('../models/tweetFilter.js');

module.exports = {
  initialize: function( io ) {
    this.io = io;
  },
  analyzeTweet: function( content, score ){
    tweetFilter.filterArtist( content, score );
  },
  save: function( content, score ) {
    var newTweet = new Artist ( { popStar: content, tweetScore: score } );
        newTweet.save(function( err ) { if ( err ) { console.error( err ) }
    })
  },
  query: function() {
    Artist.find({}).limit(5).exec(function( err, docs ) {
      if ( err ) return console.error( err );
        for (var i = 0; i < docs.length; i++) {
      this.analyzeTweet( docs[i].popStar, docs[i].tweetScore )
      }
     }.bind( this ));
      setTimeout( this.query.bind( this ) , 5000 );
   },
   handler: function( error ){
    console.error( error );
 }
}