var sentiment = require('sentiment');

module.exports = function(data){
  return sentiment(data);
}