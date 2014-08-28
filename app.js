// var sys = require('util')
  var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , sentiment = require('sentiment')
  , twitter = require('ntwitter')
  // , mongoose = require('mongoose')
  , uriUtil = require('mongodb-uri')
  , tweet
  , mongodbUri
  , mongooseUri
  , popTracker
  , options
  , db
  , mongoStream
  , tweetSchema
  , Artist
  , score
  , serverPort = 8080;

// declares artists to track & artist sentiment score arrays
popTracker = [ "katy perry, katyperry, eminem, justin bieber, justinbieber, bieber, beyonce, taylor swift, taylorswift, jtimberlake, timberlake, justin timberlake, justintimberlake, adam levine, adamlevine, maroon 5, maroon5, kaynewest, kanye west, miley cyrus, rihanna, demilovato, demi lovato, ladygaga, lady gaga" ];

// declares public folder
app.use('/', express.static(__dirname + '/public'));

// declares routes
app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
  search = req.query || "";
});

// ----------------------------------------------------------------------------------------------

// creates the database connection string
// mongodbUri = process.env.mongodbUri
// mongooseUri = uriUtil.formatMongoose(mongodbUri);


// // creates database options
// options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
//            replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };

// initiate & store the database connection
// mongoose.connect(mongooseUri, options);

// db = mongoose.connection;






// db.on('error', console.error.bind(console, 'connection error:'));

// tweetSchema = mongoose.Schema(
//   { popStar: { type: String }, tweetScore: { type: Number } },
//   { capped: { size: 5000000, max: 50000, autoIndexId: false } }
// );

// stores tweet documents in a collection called "artists"
// Artist = mongoose.model('artists', tweetSchema);

// // ----------------------------------------------------------------------------------------------

// var queryMongo = (function() {
//   var count = 0;
//   var queryCounter = function() {
//     ++count;
//     if ( count == 1000 ) {
//       count = 0;
//       setTimeout( queryMongo, 60000 )
//     }

//     sys.puts( "Tweety Pop has queryed the database " + count + " times." );

//     Artist.find({}).limit(10).exec(function(err, docs) {
//       if ( err ) sys.puts(sys.inspect( err ));
//       for (var i=0; i < docs.length; i++) {
//         io.sockets.emit( 'analyzeScore', docs[i].popStar, docs[i].tweetScore )
//         io.sockets.emit( 'renderTweet', docs[i].popStar, docs[i].tweetScore )
//       }
//     });
//     setTimeout(queryMongo, 1200);
//   };
//   queryCounter.count = function() {
//     return count;
//   };
//   return queryCounter;
// }());


// // ----------------------------------------------------------------------------------------------

// twitter authoriization
tweet = new twitter({
  consumer_key: "4R8pulpXWVL2djtgwC5RwrGwW",
  consumer_secret: "jW5GuBIHKMNH6JMvi67rYVqwkOxeHa4ceaibxscah0DjG27ezN",
  access_token_key: "195177239-1NI8bL9utZ2MnNXowy607mYLABlH83gp4k9TAgrA",
  access_token_secret: "ZVusxwm9y4aJCnvtx3MHj7148REZikXyySeZURZsLUVGz"
});

tweet.stream('statuses/filter', {
    "track": popTracker
  },
  function(stream) {
  stream.on('data', function(data) {
      if(data.id != null){
      addTweet(data)
    }
  })

 stream.on('error', function(error){
      console.log(error.message)
   })
 })


// ----------------------------------------------------------------------------------------------

function addTweet(data) {
  // sys.puts('made it!')
  console.log('madeit')
  // removes foreign characters from tweets, create sentiment score
  var foreignCharacters = unescape(encodeURIComponent(data.text));
  var tweetFormatted = decodeURIComponent(escape(foreignCharacters));
  score = sentiment(tweetFormatted).score

  // emit and render stream
  io.sockets.emit('analyzeScore', tweetFormatted, score)
  io.sockets.emit('renderTweet', tweetFormatted, score)

  // declares conditions to save to database
  // if (score != 0) {
  //   var newDocument = new Artist({ popStar: tweetFormatted, tweetScore: score });
  //   newDocument.save(function(err) {
  //     if (err) { sys.puts(err) }
  //     sys.puts( "Tweety Pop saved a new tweet with id: " + data.id )
  //   })
  }
// }

server.listen( process.env.PORT || serverPort );
// sys.log( "Node server has been sucessfully initiated." );


// queryMongo();