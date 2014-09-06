var mongoose = require('mongoose');

var artistSchema = mongoose.Schema(
  { popStar: { type: String }, tweetScore: { type: Number } },
  { capped: { size: 50000, max: 50000, autoIndexId: false } }
)

module.exports = mongoose.model( 'artist', artistSchema );