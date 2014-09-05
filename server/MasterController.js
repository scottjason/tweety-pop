var app = require('./controllers/appController.js')
  , mongoController = require('./controllers/mongoController.js')
  , TweetModel = require('./models/tweetModel.js')
  , mongoModel = require('./models/mongoModel.js')

module.exports = {
  initialize: function() {
    app.configure();
    app.listen();
    mongoController.init();
    mongoController.connect();
    mongoController.create();
  },
  stream: function() {
      TweetModel.stream()
    // twitter.stream()
    // twitter.parseData()
  }
}