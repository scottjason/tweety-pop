

// , io = require('socket.io').listen(server)



// declares artists to track, artist sentiment score arrays & mongoIncrementer closure
popTracker = ["katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga"];








// // query tweets stored in mongo db
// function queryMongo() {
//   console.log('just fetched tweets')
//   var tweetQuery = Artist.find({}).limit(15);
//   tweetQuery.exec(function(err, docs) {
//     if (err) return console.error(err);
//     for (var i = 0; i < docs.length; i++) {
//       // console.log(docs[i].popStar, docs[i].tweetScore)
//       renderTweet(docs[i].popStar, docs[i].tweetScore)
//     }
//     setTimeout(queryMongo, 3000)
//   })
// }

// // ----------------------------------------------------------------------------------------------
// // saves incoming tweets to mongo
// function saveTweet(data) {
//   // removes foreign characters from tweets, create sentiment score
//   var foreignCharacters = unescape(encodeURIComponent(data.text));
//   var tweetFormatted = decodeURIComponent(escape(foreignCharacters));
//   var score = sentiment(tweetFormatted).score

//   // declares conditions to save to database
//   if (score != 0) {
//     renderTweet(tweetFormatted, score);

//     var newDocument = new Artist({
//       popStar: tweetFormatted,
//       tweetScore: score
//     });
//     newDocument.save(function(err) {
//       if (err) {
//         console.log(err)
//       }
//     })
//   }
// }

// // emits tweets and tweet-scores to client
// function renderTweet(tweet, score) {
//   io.sockets.emit('analyzeScore', tweet, score)
//   io.sockets.emit('renderTweet', tweet, score)
// }

// ----------------------------------------------------------------------------------------------
// initiates server connection