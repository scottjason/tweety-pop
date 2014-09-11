 var TweetScore = function( scoresArr ){
   this.scoresArr = scoresArr;
 }
 TweetScore.prototype.avgScore = function(){
    var sum = 0;
   for ( var i = 0; i < this.scoresArr.length; i++ ) {
     sum += parseInt( this.scoresArr[i], 10 );
   }
   var avg = sum / this.scoresArr.length;
 }
  TweetScore.prototype.label = function(){
    var label;
    switch( this.avgScore() ) {
    case ( avg > 0 && avg < 1 ) :
        label = 'warm'
        break;
    case ( avg >= 1 && avg < 2 ):
        label = 'hot'
        break;
    case ( avg >= 2 && avg < 3 ):
        label = 'blazing'
        break;
    case ( avg >= 3 ):
        label = 'ON FIRE!'
    case ( avg <= 0 && avg > -1 ):
        label = "cold"
        break;
    case ( avg <= -1 && avg > -2 ):
        label = 'freezing'
        break;
    case ( avg <= -2 ):
        label = 'FREEZER BURN!'
        break;
    }
  return label
}
module.exports = TweetScore;
