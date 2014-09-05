var mongoose = require('mongoose'),
  dotenv = require('dotenv'),
  app = require('./appController');
  dotenv.load();

module.exports = {
  initialize: function() {
    this.mongodbUri = process.env.mongodbUri;
    mongoose.connect(this.mongodbUri);
    this.db = mongoose.connection;
    this.connect();
  },
  connect: function() {
    this.db.on('open', function() {
      console.log('Mongoose default connection open to ' + this.mongodbUri);
      app.initialize();
    }.bind(this));

    this.db.on('error', function(err) {
      console.log('Mongoose default connection error: ' + err);
    }.bind(this));

    this.db.on('disconnected', function() {
      console.log('Mongoose default connection disconnected');
    }.bind(this));

    process.on('SIGINT', function() {
      this.db.close(function() {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
      })
    }.bind(this))
  }
}

// DataBaseController.prototype.schema = function() {

//   var tweetSchema = mongoose.Schema(
//   { popStar: { type: String }, tweetScore: { type: Number } },
//   { capped: { size: 50000, max: 50000, autoIndexId: false } }
//   )
// }

