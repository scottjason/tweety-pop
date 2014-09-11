$(document).ready(function() {

var socket = io.connect();

Number.prototype.toFixedDown = function(digits) {
  var regularExp = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
  matchString = this.toString().match(regularExp);
    return matchString ? parseFloat(matchString[1]) : this.valueOf();
};

socket.on('errorHandler', function(error){
  console.log(error.messsage)
})

});