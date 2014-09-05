var mongoose = require('mongoose')

module.exports = {

  init: function() {
    // creates the database connection string
    mongodbUri = process.env.mongodbUri

    // initiate the database connection
    mongoose.connect(mongodbUri);
  },
  connect: function() {

    // when successfully connected
    mongoose.connection.on('open', function() {
      console.log('Mongoose default connection open to ' + mongodbUri);
    });

    // if the connection throws an error
    mongoose.connection.on('error', function(err) {
      console.log('Mongoose default connection error: ' + err);
    });

    // when the connection is disconnected
    mongoose.connection.on('disconnected', function() {
      console.log('Mongoose default connection disconnected');
    });

    // when the node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
      mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
      });
    });
  },
  create: function() {
    // creates the schema
    tweetSchema = mongoose.Schema({
      popStar: {
        type: String
      },
      tweetScore: {
        type: Number
      }
    }, {
      capped: {
        size: 50000,
        max: 50000,
        autoIndexId: false
      }
    });
    // creates the model 'Artist' for the 'artist' collection
    Artist = mongoose.model('artist', tweetSchema);
  }
}

