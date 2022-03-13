
var express = require('express');
var app = express();

var dataFile = require('../data/data.json');
app.get("/",function(req,res){
    res.send('<h2>Welcome to routing Home page</h2>')
});//end of the app

app.get("/employees",function(req,res){
    var info='';
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

app.get("/employees/:empId",function(req,res){
    var employee = dataFile.employees[req.params.empId];
    res.send(`
    <h3>${employee.id}</h3>
    <h3>${employee.name}</h3>
    <h3>${employee.salary}</h3>
    `);
});

app.server = app.listen(3000,function(){
    console.log('Server started on port 3000');
});