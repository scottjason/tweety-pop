var twitter = require('twitter'),
  sentiment = require('sentiment')

var popTracker = ["katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga"];

modules.exports = {
  // twitter authorization
  init: function() {
    tweet = new twitter({
      consumer_key: process.env.consumer_key,
      consumer_secret: process.env.consumer_secret,
      access_token_key: process.env.access_token_key,
      access_token_secret: process.env.access_token_secret
    });
  },
  stream: function() {
    // stream twitter, save to mongodb
    tweet.stream('statuses/filter', {
        "track": popTracker
      },
      function(stream) {
        stream.on('error', function( error ) {
          io.sockets.emit('errorHandler', error);
        })

        stream.on('data', function( data ) {
          if (data.id != null) {
            saveTweet( data )
          }
        });
     });
  }
}