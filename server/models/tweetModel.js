var twitter = require('twitter')
  , sentiment = require('sentiment')
  , dotenv = require('dotenv')
  , MasterController = require('../masterController.js');
    dotenv.load();

var popTracker = ["katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga"];

TweetModel.prototype.stream = function(){
  this.tweet.stream('statuses/filter', { "track": popTracker }, function( stream ) {
    stream.on('data', function( data ) {
      if ( data.id != null ) {
        this.clean( data )
      }
    }.bind( this ));
    stream.on('error', function( error ) {
      console.log( error )
    });
  }.bind( this ))
}

TweetModel.prototype.clean = function( data ){
  if( data.id != null ){
    this.filter( data.text.replace( /[^\w\s]/gi, '' ) )
  }
}

TweetModel.prototype.filter = function( content ){
  var score = sentiment( content ).score
  if( score != 0 ){
  this.MasterController.collect( content, score )
  }
}

function TweetModel(){
  this.MasterController = new MasterController;
  this.tweet = new twitter({
      consumer_key: process.env.consumer_key,
      consumer_secret: process.env.consumer_secret,
      access_token_key: process.env.access_token_key,
      access_token_secret: process.env.access_token_secret
   });
}

module.exports = TweetModel;


















