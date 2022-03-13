//node starts the execution from server.js file
//this file acting as main server file
//this file used to collaborate the modules
//login

//impot express module
let express = require("express");
//import bosy parser module
let bodyparser=require("body-parser");

let cors = require("cors");

//create the rest object
let app = express();
//enable the ports communication

//set the JSON as MIME Type
app.use(bodyparser.json());
//ready the json
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());

//use fetch module
app.use("/fetch",require("./fetch/fetch"));
app.use("/delete",require("./delete/delete"));
// app.use("/register",require("./register/register"));

//app.use("/login",require("./login/login"));
//assign the port no
app.listen(3000);
console.log("server listening the port no.3000")
