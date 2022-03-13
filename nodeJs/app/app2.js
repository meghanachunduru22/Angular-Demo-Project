// //import http object
// var http = require('http');

// //create node server
// //req object coming from client,res output to client
// var myServer = http.createServer(function(req,res){
//     res.writeHeader(200,{"Content-Type":"text/html"});
//     //res.writeHeader(200,{"Content-Type":"text"}); if you use text html tags wil be treated as general text
//     res.write('<h1>Connection Successfullyy done.. !!! Welcome to Node Server!!!</h1>');
//     res.end();
// });
// myServer.listen(3000);
// console.log('use url localhost:3000');
// //for getting  updated when you change some code then use command - nodemon filename.js if you dont want to update automacilly when saved use just node file name.js

var express = require('express');
var app = express();
app.get("/",function(req,res){
    res.send("<h1>Express Connection Success..</h1>"+req.url);
});
app.server = app.listen(3000,function(){
    console.log('Server started on port 3000');

});