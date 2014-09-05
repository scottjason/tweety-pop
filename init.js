;(function initialize(){
  var DataBaseController = require('./server/controllers/dbController.js')
    , database = new DataBaseController;
      database.connect();
})()


