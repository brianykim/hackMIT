var express = require("express");

var app = express.createServer();
var fs = require('fs');
var index =fs.readFileSync("~/Documents/hackMIT/nodejs/index.html");
app.use(express.logger());

app.get('/', function(request, response) {
  response.render(index);
});

//app.listen(8080);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
