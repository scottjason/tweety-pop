var every = require('schedule').every
  , Artist = require('../models/dbModel.js');

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
        newTweet.save(function( err ) { if ( err ) { console.log( err ) }
    })
  },
  query: function() {
    every('2s').do(function() {
    var tweetQuery = Artist.find({}).limit(100);

        tweetQuery.exec(function( err, docs ) {
    if (err) return console.error( err );
      for (var i = 0; i < docs.length; i++) {

        this.analyze( docs[i].popStar, docs[i].tweetScore )
     }
   }.bind( this ))
  }.bind( this ))
 },
   handler: function( error ){
    console.log( error )
 }
}

