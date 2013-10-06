/*var express = require("express");

var app = express.createServer();
var fs = require('fs');
var index =fs.readFileSync("~/Documents/hackMIT/nodejs/index.html");
app.use(express.logger());

app.get('/', function(request, response) {
  response.end(index);
});

//app.listen(8080);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});*/

var http = require('http'),
    fs = require('fs');
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});
