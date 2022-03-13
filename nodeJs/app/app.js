//console.log('Welcome to Node JS Server');
//Create API using NodeJs
//http protocol for data transmission from client to server or viceversa

//import http object

//http used to create servr and that is used to communication client and server
var http = require('http');

//create node server
//req object coming from client,res output to client
var myServer = http.createServer(function(req,res){
    res.write('Connection Success ..!!! Welcome to Node Server!!!');
    res.end();
});
myServer.listen(3000);
console.log('use url localhost:3000');
