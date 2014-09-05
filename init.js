;(function initialize(){
var DataBaseController = require('./server/controllers/DataBaseController.js');
var database = new DataBaseController;
database.connect();
})()


