$(document).ready(function() {

socket = io.connect();

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
    socket,
    interpreter;


// Adds Truncation Function to Number Type
Number.prototype.toFixedDown = function(digits) {
  var regularExp = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
  matchString = this.toString().match(regularExp);
    return matchString ? parseFloat(matchString[1]) : this.valueOf();
};

// socket.on('catchError', function(error){
//   console.log(error.messsage)
// })

socket.on('analyzeScore', function(newTweet, score){
    if (newTweet.toLowerCase().indexOf('perry') != -1 ) {
      perryScores.push(score)
      perryScoreCreate(perryScores);
    } else if ( newTweet.toLowerCase().indexOf('bieber') != -1 ) {
      bieberScores.push(score);
      bieberScoreCreate(bieberScores);
    } else if (( newTweet.toLowerCase().indexOf('levine') != -1 || newTweet.toLowerCase().indexOf('maroon') != -1) ) {
      levineScores.push(score);
      levineScoreCreate(levineScores);
    } else if ( newTweet.toLowerCase().indexOf('beyonce') != -1 ) {
      beyonceScores.push(score);
      beyonceScoreCreate(beyonceScores);
    } else if ( newTweet.toLowerCase().indexOf('rihanna') != -1 ) {
      rihannaScores.push(score);
      rihannaScoreCreate(rihannaScores);
    } else if ( newTweet.toLowerCase().indexOf('eminem') != -1 ) {
      eminemScores.push(score);
      eminemScoreCreate(eminemScores);
    } else if ( newTweet.toLowerCase().indexOf('miley') != -1 ) {
      mileyScores.push(score);
      mileyScoreCreate(mileyScores);
    } else if ( newTweet.toLowerCase().indexOf('kanye') != -1 ) {
      kanyeScores.push(score);
      kanyeScoreCreate(kanyeScores);
    } else if ( newTweet.toLowerCase().indexOf('gaga') != -1 ) {
      gagaScores.push(score);
      gagaScoreCreate(gagaScores);
    } else if ( newTweet.toLowerCase().indexOf('swift') != -1 ) {
      swiftScores.push(score);
      swiftScoreCreate(swiftScores);
    } else if ( newTweet.toLowerCase().indexOf('timberlake') != -1 ) {
      timberlakeScores.push(score);
      timberlakeScoreCreate(timberlakeScores);
    } else if ( newTweet.toLowerCase().indexOf('lovato') != -1 ) {
      lovatoScores.push(score);
      lovatoScoreCreate(lovatoScores);
    } else {}
  });

function perryScoreCreate(perryScores) {
var sum = 0;
   for (var i = 0; i < perryScores.length; i++) {
     sum += parseInt(perryScores[i], 10);
   }
   var avg = sum / perryScores.length;

   if (avg > 0 && avg < 1) {
      interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
      interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
      interpreter = "blazing"
   } else if (avg >= 3) {
      interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
      interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
      interpreter = "freezing"
   } else {
      interpreter = "FREEZER BURN!"
   }

   $(".katie-average-analyzing").hide();
   $('#katy-average').text(avg.toFixedDown(4));
   $('#katy-interpreter').text(interpreter);
}

function levineScoreCreate(levineScores) {
   var sum = 0;
   for (var i = 0; i < levineScores.length; i++) {
     sum += parseInt(levineScores[i], 10);
   }
   var avg = sum / levineScores.length;

   if (avg > 0 && avg < 1) {
      interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
      interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
      interpreter = "blazing"
   } else if (avg >= 3) {
      interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
      interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
      interpreter = "freezing"
   } else {
      interpreter = "FREEZER BURN!"
   }

   $(".levine-average-analyzing").hide();
   $('#levine-average').text(avg.toFixedDown(4));
   $('#levine-interpreter').text(interpreter);
}

function beyonceScoreCreate(beyonceScores) {
   var sum = 0;
   for (var i = 0; i < beyonceScores.length; i++) {
     sum += parseInt(beyonceScores[i], 10);
   }
   var avg = sum / beyonceScores.length;

   if (avg > 0 && avg < 1) {
      interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
      interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
      interpreter = "blazing"
   } else if (avg >= 3) {
      interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
      interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
      interpreter = "freezing"
   } else {
      interpreter = "FREEZER BURN!"
   }

   $(".beyonce-average-analyzing").hide();
   $('#beyonce-average').text(avg.toFixedDown(4));
   $('#beyonce-interpreter').text(interpreter);
}

function bieberScoreCreate(bieberScores) {
   var sum = 0;
   for (var i = 0; i < bieberScores.length; i++) {
     sum += parseInt(bieberScores[i], 10);
   }
   var avg = sum / bieberScores.length;

   if (avg > 0 && avg < 1) {
      interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
      interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
      interpreter = "blazing"
   } else if (avg >= 3) {
      interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
      interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
      interpreter = "freezing"
   } else {
      interpreter = "FREEZER BURN!"
   }
   $(".bieber-average-analyzing").hide();
   $('#bieber-average').text(avg.toFixedDown(4));
   $('#bieber-interpreter').text(interpreter);
}

function rihannaScoreCreate(rihannaScores) {
   var sum = 0;
   for (var i = 0; i < rihannaScores.length; i++) {
     sum += parseInt(rihannaScores[i], 10);
   }
   var avg = sum / rihannaScores.length;

   if (avg > 0 && avg < 1) {
      interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
      interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
      interpreter = "blazing"
   } else if (avg >= 3) {
      interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
      interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
      interpreter = "freezing"
   } else {
      interpreter = "FREEZER BURN!"
   }
   $(".rihanna-average-analyzing").hide();
   $('#rihanna-average').text(avg.toFixedDown(4));
   $('#rihanna-interpreter').text(interpreter);
}

function eminemScoreCreate(eminemScores) {
   var sum = 0;
   for (var i = 0; i < eminemScores.length; i++) {
     sum += parseInt(eminemScores[i], 10);
   }
   var avg = sum / eminemScores.length;

   if (avg > 0 && avg < 1) {
      interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
      interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
      interpreter = "blazing"
   } else if (avg >= 3) {
      interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
      interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
      interpreter = "freezing"
   } else {
      interpreter = "FREEZER BURN!"
   }
   $(".eminem-average-analyzing").hide();
   $('#eminem-average').text(avg.toFixedDown(4));
   $('#eminem-interpreter').text(interpreter);
}

function mileyScoreCreate(mileyScores) {
   var sum = 0;
   for (var i = 0; i < mileyScores.length; i++) {
     sum += parseInt(mileyScores[i], 10);
   }
   var avg = sum / mileyScores.length;
   if (avg > 0 && avg < 1) {
      interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
      interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
      interpreter = "blazing"
   } else if (avg >= 3) {
      interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
      interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
      interpreter = "freezing"
   } else {
      interpreter = "FREEZER BURN!"
   }
   $(".miley-average-analyzing").hide();
   $('#miley-average').text(avg.toFixedDown(4));
   $('#miley-interpreter').text(interpreter);
}

function kanyeScoreCreate(kanyeScores) {
   var sum = 0;
   for (var i = 0; i < kanyeScores.length; i++) {
     sum += parseInt(kanyeScores[i], 10);
   }
   var avg = sum / kanyeScores.length;

   if (avg > 0 && avg < 1) {
      interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
      interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
      interpreter = "blazing"
   } else if (avg >= 3) {
      interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
      interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
      interpreter = "freezing"
   } else {
      interpreter = "FREEZER BURN!"
   }
   $(".kanye-average-analyzing").hide();
   $('#kanye-average').text(avg.toFixedDown(4));
   $('#kanye-interpreter').text(interpreter);
}

function gagaScoreCreate(gagaScores) {
   var sum = 0;
   for (var i = 0; i < gagaScores.length; i++) {
     sum += parseInt(gagaScores[i], 10);
   }
   var avg = sum / gagaScores.length;
   if (avg > 0 && avg < 1) {
      interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
      interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
      interpreter = "blazing"
   } else if (avg >= 3) {
      interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
      interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
      interpreter = "freezing"
   } else {
      interpreter = "FREEZER BURN!"
   }
   $(".gaga-average-analyzing").hide();
   $('#gaga-average').text(avg.toFixedDown(4));
   $('#gaga-interpreter').text(interpreter);
}

function swiftScoreCreate(swiftScores) {
   var sum = 0;
   for (var i = 0; i < swiftScores.length; i++) {
     sum += parseInt(swiftScores[i], 10);
   }
   var avg = sum / swiftScores.length;
   if (avg > 0 && avg < 1) {
      interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
      interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
      interpreter = "blazing"
   } else if (avg >= 3) {
      interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
      interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
      interpreter = "freezing"
   } else {
      interpreter = "FREEZER BURN!"
   }
   $(".swift-average-analyzing").hide();
   $('#swift-average').text(avg.toFixedDown(4));
   $('#swift-interpreter').text(interpreter);
}

function timberlakeScoreCreate(timberlakeScores) {
   var sum = 0;
   for (var i = 0; i < timberlakeScores.length; i++) {
     sum += parseInt(timberlakeScores[i], 10);
   }
   var avg = sum / timberlakeScores.length;
   if (avg > 0 && avg < 1) {
      interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
      interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
      interpreter = "blazing"
   } else if (avg >= 3) {
      interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
      interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
      interpreter = "freezing"
   } else {
      interpreter = "FREEZER BURN!"
   }
   $(".timberlake-average-analyzing").hide();
   $('#timberlake-average').text(avg.toFixedDown(4));
   $('#timberlake-interpreter').text(interpreter);
}

function lovatoScoreCreate(lovatoScores) {
   var sum = 0;
   for (var i = 0; i < lovatoScores.length; i++) {
     sum += parseInt(lovatoScores[i], 10);
   }
   var avg = sum / lovatoScores.length;
   if (avg > 0 && avg < 1) {
      interpreter = "warm"
   } else if (avg >= 1 && avg < 2) {
      interpreter = "hot"
   } else if (avg >= 2 && avg < 3) {
      interpreter = "blazing"
   } else if (avg >= 3) {
      interpreter = "ON FIRE!"
   } else if (avg <= 0 && avg > -1) {
      interpreter = "cold"
   } else if (avg <= -1 && avg > -2) {
      interpreter = "freezing"
   } else {
      interpreter = "FREEZER BURN!"
   }
   $(".lovato-average-analyzing").hide();
   $('#lovato-average').text(avg.toFixedDown(4));
   $('#lovato-interpreter').text(interpreter);
}

 // Render for Incoming Tweet Stream
socket.on('renderTweet', function(tweet, rating) {

   if (tweet.toLowerCase().indexOf('katy perry') != -1) {
     renderKatie(tweet.toLowerCase(), rating);
   } else if (tweet.toLowerCase().indexOf('jtimberlake') != -1 || tweet.toLowerCase().indexOf('justin timerblake') != -1) {
     renderTimberlake(tweet.toLowerCase(), rating);
   } else if (tweet.toLowerCase().indexOf('justin bieber') != -1 || tweet.toLowerCase().indexOf('bieber') != -1) {
     renderBieber(tweet.toLowerCase(), rating);
   } else if (tweet.toLowerCase().indexOf('beyonce') != -1) {
     renderBeyonce(tweet.toLowerCase(), rating);
   } else if (tweet.toLowerCase().indexOf('eminem') != -1) {
     renderEminem(tweet.toLowerCase(), rating);
   } else if (tweet.toLowerCase().indexOf('miley') != -1) {
     renderMiley(tweet.toLowerCase(), rating);
   } else if (tweet.toLowerCase().indexOf('rihanna') != -1) {
     renderRihanna(tweet.toLowerCase(), rating);
   } else if (tweet.toLowerCase().indexOf('kanye') != -1) {
     renderKanye(tweet.toLowerCase(), rating);
   } else if (tweet.toLowerCase().indexOf('gaga') != -1) {
     renderGaga(tweet.toLowerCase(), rating);
   } else if (tweet.toLowerCase().indexOf('swift') != -1) {
     renderSwift(tweet.toLowerCase(), rating);
   } else if (tweet.toLowerCase().indexOf('levine') != -1 || tweet.toLowerCase().indexOf('maroon') != -1) {
     renderLevine(tweet.toLowerCase(), rating);
   } else if (tweet.toLowerCase().indexOf('lovato') != -1) {
     renderLovato(tweet.toLowerCase(), rating);
   } else if (tweet.toLowerCase().indexOf('dragons') != -1) {
     renderDragon(tweet.toLowerCase(), rating);
   } else {
     return null
   }
 });

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
});