var express = require('express');
var app = express();

app.get("/",function(req,res){
    res.send("<h1>Express Connection Success..</h1>"+req.url);
});

app.server = app.listen(3000,function(){
    console.log('Server started on port 3000');

});