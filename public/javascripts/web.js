$(document).ready(function() {
    socket = io.connect()

    socket.on('message', function(data, rating) {
        newTweet(data.text, rating.score)
    })


function newTweet(tweet, score){
  $(".tweet").append( "<p>" + tweet + "</p>" );
};
});