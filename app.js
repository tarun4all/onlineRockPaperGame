const express = require("express");
const app = express();
app.use(express.static("public"));
const con=require("./config");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());
app.post('/shoot',(req,res)=>{
    
    var userid =req.body.userid;
    var press=req.body.b1;
    
    //got button click paper/s/sc and user id for online fight
    var userObject={userid};
    var userObject1={press};
    con.begin(userObject,userObject1,res);
    
})
app.listen(8948,()=>{
    console.log("Server Start...");
})

