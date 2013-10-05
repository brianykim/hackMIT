var express = require("express");

var app = express.createServer();
var fs = require('fs');
var index =fs.readFileSync("/nodejs/index.html");
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(index);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

/*var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});*/