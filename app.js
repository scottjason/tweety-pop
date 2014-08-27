var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io')
  , socket = io.listen(server)
  , sentiment = require('sentiment')
  , twitter = require('twitter')
  , mongoose = require('mongoose')
  , tweet;
// var socket = io.listen(server);
// declares public folder
app.use('/', express.static(__dirname + '/public'));

// declares routes
app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
  search = req.query || "";
});

// declares artists to track & artist sentiment score arrays
var popTracker = [ "katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga" ];

var perryScores = [],
    levineScores = [],
    beyonceScores = [],
    bieberScores = [],
    rihannaScores = [],
    eminemScores = [],
    mileyScores = [],
    kanyeScores = [],
    gagaScores = [],
    swiftScores = [],
    timberlakeScores = [],
    lovatoScores = [];

// twitter auth
tweet = new twitter({
  consumer_key: "Qz8vqLjcmgxOjhUpwd3hD2ZCw",
  consumer_secret: "vRSxeLjj2pddubDxkpaZ1bqsonC0SrWsx9xMaBw91U2P8N42J2",
  access_token_key: "195177239-1NI8bL9utZ2MnNXowy607mYLABlH83gp4k9TAgrA",
  access_token_secret: "ZVusxwm9y4aJCnvtx3MHj7148REZikXyySeZURZsLUVGz"
});

server.listen(process.env.PORT || 8090);
console.log("Sucessfully initiated Node server.");


socket.on('connect', function(client){
    console.log('socket open')
    client.on('disconnect', function(){
        console.log('socket closed');
    });

});


tweet.stream('statuses/filter', {
    "track": popTracker
  },
  function(stream) {
    console.log('made to stream')
    stream.on('data', function(data) {
      // removes foreign characters from tweets, create sentiment score
      var newTweet = data.text;
      var foreignCharacters = unescape(encodeURIComponent(newTweet));
      newTweet = decodeURIComponent(escape(foreignCharacters));
      var score = sentiment(newTweet).score

      // declares conditions to both save and render
      if ( newTweet != null && score != 0 ) {
        // var newDocument = new Rating( { popStar: newTweet, tweetScore: score } );
        // newDocument.save(function(err) { if( err ) throw new Error( 'There was an error while saving to the database.' ) })

        // analyzeTweet( newTweet, score );
        socket.emit( 'incoming', newTweet, score )}

      // declares conditions to render only
      else if ( newTweet != null ) {
        // analyzeTweet( newTweet, score );
        socket.emit( 'incoming', newTweet, score )}
      else {};
   });
 });


