

// , io = require('socket.io').listen(server)











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




// // emits tweets and tweet-scores to client
// function renderTweet(tweet, score) {
//   io.sockets.emit('analyzeScore', tweet, score)
//   io.sockets.emit('renderTweet', tweet, score)
// }

