var mongoose = require('mongoose')
  , dotenv = require('dotenv')
  , AppController = require('./appController')
    dotenv.load();

DataBaseController.prototype.connect = function() {

  this.db.on('open', function() {
    console.log('Mongoose default connection open to ' + this.mongodbUri);
    this.app.initialize();
    this.schema();
  }.bind( this ));

  this.db.on('error', function( err ) {
    console.log('Mongoose default connection error: ' + err);
  }.bind( this ));

  this.db.on('disconnected', function() {
    console.log('Mongoose default connection disconnected');
  }.bind( this ));

  process.on('SIGINT', function() {
    this.db.close(function() {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    })
  }.bind( this ))
}

DataBaseController.prototype.schema = function() {

  var tweetSchema = mongoose.Schema(
  { popStar: { type: String }, tweetScore: { type: Number } },
  { capped: { size: 50000, max: 50000, autoIndexId: false } }
  )
}

function DataBaseController() {
  this.mongodbUri = process.env.mongodbUri;
  mongoose.connect( this.mongodbUri );
  this.db = mongoose.connection;
  this.app = new AppController;
}

module.exports = DataBaseController;