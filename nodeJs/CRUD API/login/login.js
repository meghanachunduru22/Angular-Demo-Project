let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let register  = require("express").Router().post("/",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/crud",(err,db)=>
        {
            if(err)
                throw err;
            else{
    db.collection("employee").insertOne({"empName":req.body.empName,"salary":req.body.salary,"email":req.body.email,"password":req.body.password,"joinDate":req.body.joinDate},
                (err, result)=> {
                    if (err) throw err;
                    res.send({message:"1 document inserted"});
                    db.close();
                  });
                }
            });
        });
module.exports = register;
