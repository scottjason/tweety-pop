var app = require('./controllers/appController.js')
  , database = require('./controllers/mongoController.js')
  , twitter = require('./models/tweetModel.js')
  , dotenv = require('dotenv')

module.exports = {
  initialize: function(){

// load environment
dotenv.load();

// initialze app
app.configure();
app.listen();

// initialze database
database.init();
database.connect();
database.create();
  }
}
