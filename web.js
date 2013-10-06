var express = require("express");

var app = express.createServer();
var fs = require('fs');
var index =fs.readFileSync("~/Documents/hackMIT/nodejs/index.html");

//app.use(express.logger());
//app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  response.send("<html><body><h1>what</h1></body></html>");
});
/*
//app.listen(8080);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});*/

/*var http = require('http'),
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
          
        response.write(html);  
        response.end();  
    }).listen(8000);
});*/
