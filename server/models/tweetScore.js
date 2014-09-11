 var TweetScore = function( scores ){
  this.scores = scores;
 }

 TweetScore.prototype.avgScore = function(){
    var sum = 0;
   for ( var i = 0; i < this.scores.length; i++ ) {
     sum += parseInt( this.scores[i], 10 );
   }
   var avg = sum / this.scores.length;
   return avg
 }
  TweetScore.prototype.label = function( average ){
    var label;
    if ( average > 0 && average < 1 ) {
        label = 'warm'
      }
    else if ( average >= 1 && average < 2 ) {
        label = 'hot'
      }
    else if ( average >= 2 && average < 3 ) {
        label = 'blazing'
      }
    else if ( average >= 3 ) {
        label = 'ON FIRE!'
      }
    else if ( average <= 0 && average > -1 ) {
        label = "cold"
      }
    else if ( average <= -1 && average > -2 ) {
        label = 'freezing'
      }
    else {
        label = 'FREEZER BURN!'
    }
  return label
}
module.exports = TweetScore;