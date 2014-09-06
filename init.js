;(function initialize(){
  var express = require('express')
    , app = express()
    , server = require('http').createServer( app )
    , io = require('socket.io').listen( server )
    , port = process.env.PORT || 3000
    , database = require('./server/controllers/dbController.js');

    app.use('/', express.static( __dirname + '/public' ));

    app.get('/', function( req, res ) {
      res.sendFile( __dirname + '/index.html' );
    });

    database.initialize( server, port, io );
})()




