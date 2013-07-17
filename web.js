var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send("testing");
//  var i = fs.readFileSync("index.html");
//  response.send(i);
  buf = new Buffer(fs.readFileSync("index.html"));
  response.send(buf.toString('utf8'));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
