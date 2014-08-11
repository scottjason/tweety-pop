// var mongoose = require('mongoose');
// var app = require('./app');

// var tweetSchema = mongoose.Schema({
//     popStar: String,
//     tweetScore: Number,
//     date: {
//       type: Date,
//       default: Date.now
//           },
//     capped: {
//     size: 1024,
//     max: 1000,
//     autoIndexId: true
//   },
//     scores: [{Type: mongoose.Schema.Types.ObjectId, ref: 'app'}]
// });

// module.exports = mongoose.model('Rating', tweetSchema);