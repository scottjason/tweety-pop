var mongoose = require('mongoose')

module.exports = {
  initialize: function() {
    mongodbUri = process.env.mongodbUri
    mongoose.connect(mongodbUri);
  },
  connect: function() {
    mongoose.connection.on('open', function() {
      console.log('Mongoose default connection open to ' + mongodbUri);
    });
    mongoose.connection.on('error', function(err) {
      console.log('Mongoose default connection error: ' + err);
    });
    mongoose.connection.on('disconnected', function() {
      console.log('Mongoose default connection disconnected');
    });
    process.on('SIGINT', function() {
      mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
      });
    });
  },
  create: function() {
    tweetSchema = mongoose.Schema({
      popStar: { type: String }, tweetScore: { type: Number } },
      { capped: { size: 50000, max: 50000, autoIndexId: false }
    });
    Artist = mongoose.model('artist', tweetSchema);
  }
}

