  var mongoose = require('mongoose'),
  dotenv = require('dotenv');
  dotenv.load();

var AppController = require('./AppController')
var app = new AppController


DataBaseController.prototype.connect = function() {

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

function DataBaseController() {
  this.mongodbUri = process.env.mongodbUri;
  mongoose.connect(this.mongodbUri);
  this.db = mongoose.connection;
}

module.exports = DataBaseController;