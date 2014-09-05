var express = require('express')
  , app = express()
  , server = require('http').createServer( app )
  , dotenv = require('dotenv')
  , mongoose = require('mongoose')
  , stream = require('./stream.js');
    dotenv.load();

module.exports = {
  initialize: function() {
    app.use('/', express.static(__dirname + '/public'));

    app.use(function(error, request, response, next) {
      response.status(500);
      response.render("You've encounterd an error.", {
        error: error
      });
    })

    app.get('/', function( req, res ) {
      res.sendFile(__dirname + '/index.html');
    });
    this.listen();
  },
  listen: function() {
    var port = process.env.PORT || 3000

    server.listen(port, function() {
      console.log( "Tweety Pop successfully listening on " + port );
    });
    this.socket();
  },
   socket: function(){
   this.io = require('socket.io').listen( server )
   this.connect();
  },
  connect: function(){
    var mongodbUri = process.env.mongodbUri
    mongoose.connect(mongodbUri);
    this.db = mongoose.connection

    this.db.on('open', function() {
      console.log('Mongoose default connection open to ' + mongodbUri);
      stream.initialize();
    });

    this.db.on('error', function(err) {
      console.log('Mongoose default connection error: ' + err);
    });

    this.db.on('disconnected', function() {
      console.log('Mongoose default connection disconnected');
    });

    process.on('SIGINT', function() {
      console.log(this)
      this.db.close(function() {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
      });
    }.bind(this));
    this.create();
  },
  create: function(){
    var tweetSchema = mongoose.Schema({
      popStar: { type: String }, tweetScore: { type: Number } },
      { capped: { size: 50000, max: 50000, autoIndexId: false }
    });
    Artist = mongoose.model('artist', tweetSchema);
    this.fetch();
  },
  fetch: function(){

  }

}






