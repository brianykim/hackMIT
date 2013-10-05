var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request,response)
{
  //Login here
  //send the login data to firebase
  response.send("Hello World");
});