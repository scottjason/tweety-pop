;(function initialize(){

// var AppController = require('./server/controllers/AppController.js')
var DataBaseController = require('./server/controllers/DataBaseController.js')
var database = new DataBaseController

database.connect();

})()


