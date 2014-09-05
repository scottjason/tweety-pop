;(function initialize(){
var app = require('./server/controllers/app.js')
  , database = require('./server/controllers/database.js')
  , stream = require('./server/models/stream.js')
  , stream = require('./server/models/save.js');

    app.initialize();
    app.listen();
    database.initialize();
    database.connect();
})()