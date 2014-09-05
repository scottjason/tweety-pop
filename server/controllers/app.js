var express = require('express')
  , app = express()
  , server = require('http').createServer(app)

module.exports = {
  initialize: function() {
    app.use('/', express.static(__dirname + '/public'));

    app.use(function(error, request, response, next) {
      response.status(500);
      response.render("You've encounterd an error.", {
        error: error
      });
    })

    app.get('/', function(req, res) {
      res.sendFile(__dirname + '/index.html');
    });
  },
  listen: function() {
    var port = process.env.PORT || 3000
    server.listen(port, function() {
      console.log("Tweety Pop successfully listening on " + port);
    });
  }
}