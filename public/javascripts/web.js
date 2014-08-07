$(document).ready(function() {
    socket = io.connect()

    socket.on('message', function(data, rating) {
        newTweet(data.text, rating.score)
    })


    function newTweet(tweet, score) {
        $(".tweet").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    };
});

//         $(".tweet").append("<p>" + tweet + score + "</p>");
//     };
// });

// $( "#clickme" ).click(function() {
//   $( "#book" ).fadeIn( "slow", function() {
//     // Animation complete
//   });