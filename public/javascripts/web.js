$(document).ready(function() {

    Number.prototype.toFixedDown = function(digits) {
        var regularExp = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        matchString = this.toString().match(regularExp);
        return matchString ? parseFloat(matchString[1]) : this.valueOf();
    };

    socket = io.connect()

    socket.on('perryScoreArray', function(perryScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < perryScores.length; i++) {
            sum += parseInt(perryScores[i], 10);
        }
        var avg = sum / perryScores.length;
        $('#katy-average').text(avg.toFixedDown(4));
    })

    socket.on('levineScoreArray', function(levineScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < levineScores.length; i++) {
            sum += parseInt(levineScores[i], 10);
        }
        var avg = sum / levineScores.length;
        $('#levine-average').text(avg.toFixedDown(4));
    })

    socket.on('beyonceScoreArray', function(beyonceScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < beyonceScores.length; i++) {
            sum += parseInt(beyonceScores[i], 10);
        }
        var avg = sum / beyonceScores.length;
        $('#beyonce-average').text(avg.toFixedDown(4));
    })


    socket.on('bieberScoreArray', function(bieberScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < bieberScores.length; i++) {
            sum += parseInt(bieberScores[i], 10);
        }
        var avg = sum / bieberScores.length;
        $('#bieber-average').text(avg.toFixedDown(4));
    })

    socket.on('message', function(tweet, rating) {
        if (tweet.indexOf('katy perry') != -1) {
            renderKatie(tweet, rating);
        } else if (tweet.indexOf('jtimberlake') != -1 || tweet.indexOf('justin timerblake') != -1) {
            renderTimberlake(tweet, rating);
        } else if (tweet.indexOf('justin bieber') != -1 || tweet.indexOf('bieber') != -1) {
            renderBieber(tweet, rating);
        } else if (tweet.indexOf('beyonce') != -1) {
            renderBeyonce(tweet, rating);
        } else if (tweet.indexOf('eminem') != -1) {
            renderEminem(tweet, rating);
        } else if (tweet.indexOf('miley') != -1) {
            renderMiley(tweet, rating);
        } else if (tweet.indexOf('rihanna') != -1) {
            renderRihanna(tweet, rating);
        } else if (tweet.indexOf('bruno') != -1) {
            renderBruno(tweet, rating);
        } else if (tweet.indexOf('adele') != -1) {
            renderAdele(tweet, rating);
        } else if (tweet.indexOf('swift') != -1) {
            renderSwift(tweet, rating);
        } else if (tweet.indexOf('levine') != -1 || tweet.indexOf('maroon') != -1) {
            renderLevine(tweet, rating);
        } else if (tweet.indexOf('lovato') != -1) {
            renderLovato(tweet, rating);
        } else if (tweet.indexOf('dragons') != -1) {
            renderDragon(tweet, rating);
        } else {
            return null
        }
    })


    function renderKatie(tweet, rating) {
        $(".katy").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }

    function renderTimberlake(tweet, rating) {
        $(".timberlake").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }

    function renderBieber(tweet, rating) {
        $(".bieber").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }

    function renderBeyonce(tweet, rating) {
        $(".beyonce").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }

    function renderEminem(tweet, rating) {
        $(".eminem").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }

    function renderMiley(tweet, rating) {
        $(".miley").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }

    function renderRihanna(tweet, rating) {
        $(".rihanna").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }

    function renderBruno(tweet, rating) {
        $(".bruno").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }

    function renderAdele(tweet, rating) {
        $(".adele").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }

    function renderSwift(tweet, rating) {
        $(".swift").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }

    function renderLevine(tweet, rating) {
        $(".levine").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }

    function renderLovato(tweet, rating) {
        $(".lovato").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }

    function renderDragon(tweet, rating) {
        $(".dragon").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }
});