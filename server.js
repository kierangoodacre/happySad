var express = require('express');
var app = express();
var server = require('http').createServer(app);
var root = __dirname + '/'

app.use(express.static(root));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/src', express.static(__dirname + '/Interface.js'));


app.get('/index', function(req,res){
  res.sendFile(root + 'index.html');
});

app.get('/spec', function(req,res){
  res.sendFile(root + 'SpecRunner.html');
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
