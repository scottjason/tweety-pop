$(document).ready(function() {

// declare floating point number truncation
    Number.prototype.toFixedDown = function(digits) {
        var regularExp = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        matchString = this.toString().match(regularExp);
        return matchString ? parseFloat(matchString[1]) : this.valueOf();
    };

// initiate socket connection
socket = io.connect()

// logic and render for database stream subscribers
    socket.on('perryScoreArray', function(perryScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < perryScores.length; i++) {
            sum += parseInt(perryScores[i], 10);
        }
        var avg = sum / perryScores.length;
        $( ".katie-average-analyzing" ).hide();
        $('#katy-average').text(avg.toFixedDown(4));
    })

    socket.on('levineScoreArray', function(levineScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < levineScores.length; i++) {
            sum += parseInt(levineScores[i], 10);
        }
        var avg = sum / levineScores.length;
        $( ".levine-average-analyzing" ).hide();
        $('#levine-average').text(avg.toFixedDown(4));
    })

    socket.on('beyonceScoreArray', function(beyonceScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < beyonceScores.length; i++) {
            sum += parseInt(beyonceScores[i], 10);
        }
        var avg = sum / beyonceScores.length;
        $(".beyonce-average-analyzing").hide();
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

    socket.on('rihannaScoreArray', function(rihannaScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < rihannaScores.length; i++) {
            sum += parseInt(rihannaScores[i], 10);
        }
        var avg = sum / rihannaScores.length;
        $('#rihanna-average').text(avg.toFixedDown(4));
    })

    socket.on('eminemScoreArray', function(eminemScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < eminemScores.length; i++) {
            sum += parseInt(eminemScores[i], 10);
        }
        var avg = sum / eminemScores.length;
        $('#eminem-average').text(avg.toFixedDown(4));
    })

    socket.on('mileyScoreArray', function(mileyScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < mileyScores.length; i++) {
            sum += parseInt(mileyScores[i], 10);
        }
        var avg = sum / mileyScores.length;
        $('#miley-average').text(avg.toFixedDown(4));
    })

     socket.on('brunoScoreArray', function(brunoScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < brunoScores.length; i++) {
            sum += parseInt(brunoScores[i], 10);
        }
        var avg = sum / brunoScores.length;
        $('#bruno-average').text(avg.toFixedDown(4));
    })

     socket.on('adeleScoreArray', function(adeleScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < adeleScores.length; i++) {
            sum += parseInt(adeleScores[i], 10);
        }
        var avg = sum / adeleScores.length;
        $('#adele-average').text(avg.toFixedDown(4));
    })

    socket.on('swiftScoreArray', function(swiftScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < swiftScores.length; i++) {
            sum += parseInt(swiftScores[i], 10);
        }
        var avg = sum / swiftScores.length;
        $('#swift-average').text(avg.toFixedDown(4));
    })

    socket.on('timberlakeScoreArray', function(timberlakeScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < timberlakeScores.length; i++) {
            sum += parseInt(timberlakeScores[i], 10);
        }
        var avg = sum / timberlakeScores.length;
        $('#timberlake-average').text(avg.toFixedDown(4));
    })

    socket.on('lovatoScoreArray', function(lovatoScores) {
        // sentiment average over time
        var sum = 0;
        for (var i = 0; i < lovatoScores.length; i++) {
            sum += parseInt(lovatoScores[i], 10);
        }
        var avg = sum / lovatoScores.length;
        $('#lovato-average').text(avg.toFixedDown(4));
    })

// logic for twitter stream subscribers
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

// render for twitter stream subscribers
    function renderKatie(tweet, rating) {
        $( ".katie-score-loading" ).hide();
        $(".katy").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
         $("#katy-incoming").fadeOut(function() {
            $(this).text(rating).fadeIn(3000);
        });
    }

    function renderTimberlake(tweet, rating) {
        $(".timberlake").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
            $("#timberlake-incoming").fadeOut(function() {
            $(this).text(rating).fadeIn(3000);
        });
    }

    function renderBieber(tweet, rating) {
        $(".bieber").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
           $("#bieber-incoming").fadeOut(function() {
           $(this).text(rating).fadeIn(3000);
        });
    }

    function renderBeyonce(tweet, rating) {
        $( ".beyonce-score-loading" ).hide();
        $(".beyonce").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
           $("#beyonce-incoming").fadeOut(function() {
           $(this).text(rating).fadeIn(3000);
        });
    }

    function renderEminem(tweet, rating) {
        $(".eminem").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
           $("#eminem-incoming").fadeOut(function() {
           $(this).text(rating).fadeIn(3000);
        });
    }

    function renderMiley(tweet, rating) {
        $(".miley").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
           $("#miley-incoming").fadeOut(function() {
           $(this).text(rating).fadeIn(3000);
        });
    }

    function renderRihanna(tweet, rating) {
        $(".rihanna").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
           $("#rihanna-incoming").fadeOut(function() {
           $(this).text(rating).fadeIn(3000);
        });
    }

    function renderBruno(tweet, rating) {
        $(".bruno").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
           $("#bruno-incoming").fadeOut(function() {
           $(this).text(rating).fadeIn(3000);
        });
    }

    function renderAdele(tweet, rating) {
        $(".adele").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
           $("#adele-incoming").fadeOut(function() {
           $(this).text(rating).fadeIn(3000);
        });
    }

    function renderSwift(tweet, rating) {
        $(".swift").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
           $("#swift-incoming").fadeOut(function() {
           $(this).text(rating).fadeIn(3000);
        });
    }

    function renderLevine(tweet, rating) {
        $( ".levine-score-loading" ).hide();
        $(".levine").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
           $("#levine-incoming").fadeOut(function() {
           $(this).text(rating).fadeIn(3000);
        });
    }

    function renderLovato(tweet, rating) {
        $(".lovato").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
           $("#lovato-incoming").fadeOut(function() {
           $(this).text(rating).fadeIn(3000);
        });
    }

    function renderDragon(tweet, rating) {
        $(".dragon").fadeOut(function() {
            $(this).text(tweet).fadeIn(3000);
        });
    }
});