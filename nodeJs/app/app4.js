//retrieving data from file
//express is easy tocode and programer friendly
var express = require('express');
var app = express();

var dataFile = require('../data/data.json');

app.get("/",function(req,res){
    var info="";
    dataFile.employees.forEach(function(item){
        info +=`
        <li>
        <h3>${item.id}</h3>
        <h3>${item.name}</h3>
        <h3>${item.salary}</h3>
        </li>
        `;
    }); //end of for loop
    res.send(info);
});  //end of app

app.server = app.listen(3000,function(){
    console.log('Server started on port 3000');
});