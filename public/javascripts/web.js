$(document).ready(function() {
  runTweety();
});

function runTweety(){
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
    lovatoScores = [],
    socket;

///////////////////////////////////////////////
// Adds Truncation Function to Number Type
///////////////////////////////////////////////
Number.prototype.toFixedDown = function(digits) {
  var regularExp = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
  matchString = this.toString().match(regularExp);
    return matchString ? parseFloat(matchString[1]) : this.valueOf();
};

socket = io.connect();

socket.on('analyzeIncoming'), function(newTweet, score){
    if (newTweet.indexOf('perry') != -1 ) {
      perryScores.push(score)
      }
      perryScoreCreate(perryScores);
    } else if ( newTweet.indexOf('bieber') != -1 ) {
      bieberScores.push(score);
    }
      bieberScoreCreate(bieberScores);
    } else if (( newTweet.indexOf('levine') != -1 || newTweet.indexOf('maroon') != -1) ) {
      levineScores.push(score);
    }
      levineScoreCreate(levineScores);
    } else if ( newTweet.indexOf('beyonce') != -1 ) {
      beyonceScores.push(score);
    }
      beyonceScoreCreate(beyonceScores);
    } else if ( newTweet.indexOf('rihanna') != -1 ) {
      rihannaScores.push(score);
    }
      rihannaScoreCreate(rihannaScores);
    } else if ( newTweet.indexOf('eminem') != -1 ) {
      eminemScores.push(score);
    }
      eminemScoreCreate(eminemScores);
    } else if ( newTweet.indexOf('miley') != -1 ) {
      mileyScores.push(score);
    }
      mileyScoreCreate(mileyScores);
    } else if ( newTweet.indexOf('kanye') != -1 ) {
      kanyeScores.push(score);
    }
      kayneScoreCreate(kanyeScores);
    } else if ( newTweet.indexOf('gaga') != -1 ) {
      gagaScores.push(score);
    }
      gagaScoreCreate(gagaScores);
    } else if ( newTweet.indexOf('swift') != -1 ) {
      swiftScores.push(score);
    }
      swiftScoreCreate(swiftScores);
    } else if ( newTweet.indexOf('timberlake') != -1 ) {
      timberlakeScores.push(score);
    }
      timberlakeScoreCreate(timberlakeScores);
    } else if ( newTweet.indexOf('lovato') != -1 ) {
      lovatoScores.push(score);
    }
      lovatoScoreCreate(lovatoScores);
    } else {}
  }
}

function perryScoreCreate(perryScores) {
var sum = 0;
   for (var i = 0; i < perryScores.length; i++) {
     sum += parseInt(perryScores[i], 10);
   }
   var avg = sum / perryScores.length;

   if (avg > 0 && avg < 1) {
     var interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
     var interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
     var interpreter = "blazing"
   } else if (avg >= 3) {
     var interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
     var interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
     var interpreter = "freezing"
   } else {
     var interpreter = "FREEZER BURN!"
   }

   $(".katie-average-analyzing").hide();
   $('#katy-average').text(avg.toFixedDown(4));
   $('#katy-interpreter').text(interpreter);
 })

 socket.on('levineScoreArray', function(levineScores) {
   var sum = 0;
   for (var i = 0; i < levineScores.length; i++) {
     sum += parseInt(levineScores[i], 10);
   }
   var avg = sum / levineScores.length;

   if (avg > 0 && avg < 1) {
     var interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
     var interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
     var interpreter = "blazing"
   } else if (avg >= 3) {
     var interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
     var interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
     var interpreter = "freezing"
   } else {
     var interpreter = "FREEZER BURN!"
   }

   $(".levine-average-analyzing").hide();
   $('#levine-average').text(avg.toFixedDown(4));
   $('#levine-interpreter').text(interpreter);
 })

 socket.on('beyonceScoreArray', function(beyonceScores) {
   var sum = 0;
   for (var i = 0; i < beyonceScores.length; i++) {
     sum += parseInt(beyonceScores[i], 10);
   }
   var avg = sum / beyonceScores.length;

   if (avg > 0 && avg < 1) {
     var interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
     var interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
     var interpreter = "blazing"
   } else if (avg >= 3) {
     var interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
     var interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
     var interpreter = "freezing"
   } else {
     var interpreter = "FREEZER BURN!"
   }

   $(".beyonce-average-analyzing").hide();
   $('#beyonce-average').text(avg.toFixedDown(4));
   $('#beyonce-interpreter').text(interpreter);
 })

 socket.on('bieberScoreArray', function(bieberScores) {
   var sum = 0;
   for (var i = 0; i < bieberScores.length; i++) {
     sum += parseInt(bieberScores[i], 10);
   }
   var avg = sum / bieberScores.length;

   if (avg > 0 && avg < 1) {
     var interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
     var interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
     var interpreter = "blazing"
   } else if (avg >= 3) {
     var interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
     var interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
     var interpreter = "freezing"
   } else {
     var interpreter = "FREEZER BURN!"
   }
   $(".bieber-average-analyzing").hide();
   $('#bieber-average').text(avg.toFixedDown(4));
   $('#bieber-interpreter').text(interpreter);
 })

 socket.on('rihannaScoreArray', function(rihannaScores) {
   var sum = 0;
   for (var i = 0; i < rihannaScores.length; i++) {
     sum += parseInt(rihannaScores[i], 10);
   }
   var avg = sum / rihannaScores.length;

   if (avg > 0 && avg < 1) {
     var interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
     var interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
     var interpreter = "blazing"
   } else if (avg >= 3) {
     var interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
     var interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
     var interpreter = "freezing"
   } else {
     var interpreter = "FREEZER BURN!"
   }
   $(".rihanna-average-analyzing").hide();
   $('#rihanna-average').text(avg.toFixedDown(4));
   $('#rihanna-interpreter').text(interpreter);
 })

 socket.on('eminemScoreArray', function(eminemScores) {
   var sum = 0;
   for (var i = 0; i < eminemScores.length; i++) {
     sum += parseInt(eminemScores[i], 10);
   }
   var avg = sum / eminemScores.length;

   if (avg > 0 && avg < 1) {
     var interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
     var interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
     var interpreter = "blazing"
   } else if (avg >= 3) {
     var interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
     var interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
     var interpreter = "freezing"
   } else {
     var interpreter = "FREEZER BURN!"
   }
   $(".eminem-average-analyzing").hide();
   $('#eminem-average').text(avg.toFixedDown(4));
   $('#eminem-interpreter').text(interpreter);
 })

 socket.on('mileyScoreArray', function(mileyScores) {
   var sum = 0;
   for (var i = 0; i < mileyScores.length; i++) {
     sum += parseInt(mileyScores[i], 10);
   }
   var avg = sum / mileyScores.length;
   if (avg > 0 && avg < 1) {
     var interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
     var interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
     var interpreter = "blazing"
   } else if (avg >= 3) {
     var interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
     var interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
     var interpreter = "freezing"
   } else {
     var interpreter = "FREEZER BURN!"
   }
   $(".miley-average-analyzing").hide();
   $('#miley-average').text(avg.toFixedDown(4));
   $('#miley-interpreter').text(interpreter);
 })

 socket.on('kanyeScoreArray', function(kanyeScores) {
   var sum = 0;
   for (var i = 0; i < kanyeScores.length; i++) {
     sum += parseInt(kanyeScores[i], 10);
   }
   var avg = sum / kanyeScores.length;

   if (avg > 0 && avg < 1) {
     var interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
     var interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
     var interpreter = "blazing"
   } else if (avg >= 3) {
     var interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
     var interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
     var interpreter = "freezing"
   } else {
     var interpreter = "FREEZER BURN!"
   }
   $(".kanye-average-analyzing").hide();
   $('#kanye-average').text(avg.toFixedDown(4));
   $('#kanye-interpreter').text(interpreter);
 })

 socket.on('gagaScoreArray', function(gagaScores) {
   var sum = 0;
   for (var i = 0; i < gagaScores.length; i++) {
     sum += parseInt(gagaScores[i], 10);
   }
   var avg = sum / gagaScores.length;
   if (avg > 0 && avg < 1) {
     var interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
     var interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
     var interpreter = "blazing"
   } else if (avg >= 3) {
     var interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
     var interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
     var interpreter = "freezing"
   } else {
     var interpreter = "FREEZER BURN!"
   }
   $(".gaga-average-analyzing").hide();
   $('#gaga-average').text(avg.toFixedDown(4));
   $('#gaga-interpreter').text(interpreter);
 })

 socket.on('swiftScoreArray', function(swiftScores) {
   var sum = 0;
   for (var i = 0; i < swiftScores.length; i++) {
     sum += parseInt(swiftScores[i], 10);
   }
   var avg = sum / swiftScores.length;
   if (avg > 0 && avg < 1) {
     var interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
     var interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
     var interpreter = "blazing"
   } else if (avg >= 3) {
     var interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
     var interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
     var interpreter = "freezing"
   } else {
     var interpreter = "FREEZER BURN!"
   }
   $(".swift-average-analyzing").hide();
   $('#swift-average').text(avg.toFixedDown(4));
   $('#swift-interpreter').text(interpreter);
 })

 socket.on('timberlakeScoreArray', function(timberlakeScores) {
   var sum = 0;
   for (var i = 0; i < timberlakeScores.length; i++) {
     sum += parseInt(timberlakeScores[i], 10);
   }
   var avg = sum / timberlakeScores.length;
   if (avg > 0 && avg < 1) {
     var interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
     var interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
     var interpreter = "blazing"
   } else if (avg >= 3) {
     var interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
     var interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
     var interpreter = "freezing"
   } else {
     var interpreter = "FREEZER BURN!"
   }
   $(".timberlake-average-analyzing").hide();
   $('#timberlake-average').text(avg.toFixedDown(4));
   $('#timberlake-interpreter').text(interpreter);
 })

 socket.on('lovatoScoreArray', function(lovatoScores) {
   var sum = 0;
   for (var i = 0; i < lovatoScores.length; i++) {
     sum += parseInt(lovatoScores[i], 10);
   }
   var avg = sum / lovatoScores.length;
   if (avg > 0 && avg < 1) {
     var interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
     var interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
     var interpreter = "blazing"
   } else if (avg >= 3) {
     var interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
     var interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
     var interpreter = "freezing"
   } else {
     var interpreter = "FREEZER BURN!"
   }
   $(".lovato-average-analyzing").hide();
   $('#lovato-average').text(avg.toFixedDown(4));
   $('#lovato-interpreter').text(interpreter);
 })

 ///////////////////////////////////////////////
 // Sorts For Artist on Incoming Twitter Stream
 ///////////////////////////////////////////////

 socket.on('incoming', function(tweet, rating) {
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
   } else if (tweet.indexOf('kanye') != -1) {
     renderKanye(tweet, rating);
   } else if (tweet.indexOf('gaga') != -1) {
     renderGaga(tweet, rating);
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

 ///////////////////////////////////////////////
 // Render for Incoming Tweet Stream
 ///////////////////////////////////////////////

 function renderKatie(tweet, rating) {
   $(".katie-score-loading").hide();
   $(".katy").fadeOut(function() {
     $(this).text(tweet).fadeIn(3000);
   });
   $("#katy-incoming").fadeOut(function() {
     $(this).text(rating).fadeIn(3000);
   });
 }

 function renderTimberlake(tweet, rating) {
   $(".timberlake-score-loading").hide();
   $(".timberlake").fadeOut(function() {
     $(this).text(tweet).fadeIn(3000);
   });
   $("#timberlake-incoming").fadeOut(function() {
     $(this).text(rating).fadeIn(3000);
   });
 }

 function renderBieber(tweet, rating) {
   $(".bieber-score-loading").hide();
   $(".bieber").fadeOut(function() {
     $(this).text(tweet).fadeIn(3000);
   });
   $("#bieber-incoming").fadeOut(function() {
     $(this).text(rating).fadeIn(3000);
   });
 }

 function renderBeyonce(tweet, rating) {
   $(".beyonce-score-loading").hide();
   $(".beyonce").fadeOut(function() {
     $(this).text(tweet).fadeIn(3000);
   });
   $("#beyonce-incoming").fadeOut(function() {
     $(this).text(rating).fadeIn(3000);
   });
 }

 function renderEminem(tweet, rating) {
   $(".eminem-score-loading").hide();
   $(".eminem").fadeOut(function() {
     $(this).text(tweet).fadeIn(3000);
   });
   $("#eminem-incoming").fadeOut(function() {
     $(this).text(rating).fadeIn(3000);
   });
 }

 function renderMiley(tweet, rating) {
   $(".miley-score-loading").hide();
   $(".miley").fadeOut(function() {
     $(this).text(tweet).fadeIn(3000);
   });
   $("#miley-incoming").fadeOut(function() {
     $(this).text(rating).fadeIn(3000);
   });
 }

 function renderRihanna(tweet, rating) {
   $(".rihanna-score-loading").hide();
   $(".rihanna").fadeOut(function() {
     $(this).text(tweet).fadeIn(3000);
   });
   $("#rihanna-incoming").fadeOut(function() {
     $(this).text(rating).fadeIn(3000);
   });
 }

 function renderKanye(tweet, rating) {
   $(".kanye-score-loading").hide();
   $(".kanye").fadeOut(function() {
     $(this).text(tweet).fadeIn(3000);
   });
   $("#kanye-incoming").fadeOut(function() {
     $(this).text(rating).fadeIn(3000);
   });
 }

 function renderGaga(tweet, rating) {
   $(".gaga-score-loading").hide();
   $(".gaga").fadeOut(function() {
     $(this).text(tweet).fadeIn(3000);
   });
   $("#gaga-incoming").fadeOut(function() {
     $(this).text(rating).fadeIn(3000);
   });
 }

 function renderSwift(tweet, rating) {
   $(".swift-score-loading").hide();
   $(".swift").fadeOut(function() {
     $(this).text(tweet).fadeIn(3000);
   });
   $("#swift-incoming").fadeOut(function() {
     $(this).text(rating).fadeIn(3000);
   });
 }

 function renderLevine(tweet, rating) {
   $(".levine-score-loading").hide();
   $(".levine").fadeOut(function() {
     $(this).text(tweet).fadeIn(3000);
   });
   $("#levine-incoming").fadeOut(function() {
     $(this).text(rating).fadeIn(3000);
   });
 }

 function renderLovato(tweet, rating) {
   $(".lovato-score-loading").hide();
   $(".lovato").fadeOut(function() {
     $(this).text(tweet).fadeIn(3000);
   });
   $("#lovato-incoming").fadeOut(function() {
   $(this).text(rating).fadeIn(3000);
   });
  }
}
