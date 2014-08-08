$(document).ready(function() {
    socket = io.connect()

    socket.on('message', function(tweet, rating) {
        if (tweet.indexOf('katy perry') != -1){
            renderKatie(tweet, rating);
        }
         else if (tweet.indexOf('eminem') != -1){
            renderEminem(tweet, rating);
        }
        else if (tweet.indexOf('justin bieber') != -1){
            renderBieber(tweet, rating);
        }
        else if (tweet.indexOf('beyonce') != -1){
            renderBeyonce(tweet, rating);
        }
        else {
            return null
        }
    })


    function renderKatie(tweet, rating) {
        $(".katy").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
            // $(".score").text(rating.score);
        });
    }
    function renderEminem(tweet, rating) {
        $(".eminem").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
            // $(".score").text(rating.score);
        });
    }
    function renderBieber(tweet, rating) {
        $(".bieber").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
            // $(".score").text(rating.score);
        });
    }
    function renderBeyonce(tweet, rating) {
        $(".beyonce").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
            // $(".score").text(rating.score);
        });
    }
});