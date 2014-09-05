var twitter = require('twitter')
  , sentiment = require('sentiment')

  // twitter authorization
tweet = new twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});

// stream twitter, save to mongodb
tweet.stream('statuses/filter', {
    "track": popTracker
  },
  function(stream) {
    stream.on('error', function(error) {
      io.sockets.emit('errorHandler', error);
    })

    stream.on('data', function(data) {
      if (data.id != null) {
        saveTweet(data)
      }
    });
  });