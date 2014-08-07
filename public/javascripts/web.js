$(document).ready(function() {
    socket = io.connect()

    socket.on('message', function(tweet, rating) {
        if (rating.score != 0) {
            slowTweet(tweet.text);
            fastTweet(tweet.text, rating);
        }
    })


    function slowTweet(tweet, rating) {
        $(".tweet").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
            // $(".score").text(rating.score);
        });
    }

        function fastTweet(tweet, rating) {
        $(".tweetFast").html(tweet);
    }





});