var twitter = require('twitter')
  , sentiment = require('sentiment')
  , dotenv = require('dotenv')
  , app = require('../controllers/appController.js')
    dotenv.load();

var popTracker = ["katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga"];

TweetModel.prototype.stream = function(){
  this.tweet.stream('statuses/filter', { "track": popTracker }, function( stream ) {
    stream.on('data', function( data ) {
      if ( data.id != null ) {
    this.createTweetScore ( data.text.replace( /[^\w\s]/gi, '' ) )
      }
    }.bind( this ));

    stream.on('error', function( error ) {
      this.app.handler( error )
    }.bind( this ));
  }.bind( this ))
}

TweetModel.prototype.createTweetScore = function( content ){
  var score = sentiment( content ).score
      this.app.analyzeTweet( content, score );
    if( score != 0 ){
      this.app.save( content, score );
  }
}

function TweetModel(){
  this.app = app;
  this.tweet = new twitter({
      consumer_key: process.env.consumer_key,
      consumer_secret: process.env.consumer_secret,
      access_token_key: process.env.access_token_key,
      access_token_secret: process.env.access_token_secret
   });
}

module.exports = TweetModel;


















