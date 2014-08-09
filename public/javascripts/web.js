$(document).ready(function() {
    socket = io.connect()

    socket.on('message', function(tweet, rating) {
        if (tweet.indexOf('katy perry') != -1){
            renderKatie(tweet, rating);
        }
         else if (tweet.indexOf('jtimberlake') != -1){
            renderTimberlake(tweet, rating);
        }
        else if (tweet.indexOf('justin bieber') != -1){
            renderBieber(tweet, rating);
        }
        else if (tweet.indexOf('beyonce') != -1){
            renderBeyonce(tweet, rating);
        }
        else if (tweet.indexOf('eminem') != -1){
            renderEminem(tweet, rating);
        }
        else if (tweet.indexOf('miley') != -1){
            renderMiley(tweet, rating);
        }
        else if (tweet.indexOf('rihanna') != -1){
            renderRihanna(tweet, rating);
        }
        else if (tweet.indexOf('bruno') != -1){
            renderBruno(tweet, rating);
        }
        else if (tweet.indexOf('adele') != -1){
            renderAdele(tweet, rating);
        }
        else if (tweet.indexOf('swift') != -1){
            renderSwift(tweet, rating);
        }
        else if (tweet.indexOf('levine') != -1){
            renderLevine(tweet, rating);
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
    function renderTimberlake(tweet, rating) {
        $(".timberlake").fadeOut(function() {
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
    function renderEminem(tweet, rating) {
        $(".eminem").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
            // $(".score").text(rating.score);
        });
    }
    function renderMiley(tweet, rating) {
        $(".miley").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
            // $(".score").text(rating.score);
        });
    }
    function renderRihanna(tweet, rating) {
        $(".rihanna").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
            // $(".score").text(rating.score);
        });
    }
    function renderBruno(tweet, rating) {
        $(".bruno").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
            // $(".score").text(rating.score);
        });
    }
    function renderAdele(tweet, rating) {
        $(".adele").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
            // $(".score").text(rating.score);
        });
    }
    function renderSwift(tweet, rating) {
        $(".swift").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
            // $(".score").text(rating.score);
        });
    }
    function renderLevine(tweet, rating) {
        $(".levine").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
            // $(".score").text(rating.score);
        });
    }
});