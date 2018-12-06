const db = {
    url : 
    //"mongodb://localhost:27017/online2018"
"mongodb://tarun:tarun1234@ds149934.mlab.com:49934/paperstone"

}
const mongoose = require("mongoose");
mongoose.connect(db.url,()=>{
    console.log("Connected to the DB");
},(err)=>{
    console.log(err);
});



var Schema  = mongoose.Schema;
var userSchema = new Schema({userid:String,user1:String,user2:String}); //will create a table with 2 columns
var User = mongoose.model("users",userSchema);


/*User.create(userObject,(err)=>{   // sytax would be schema onject.create and data object from client in params
    if(err){
        console.log("Can't Register Due to Error");
    }
    else{
        console.log("Register SuccessFully");
    }
})*/
const userOperations ={
    begin(userObject,userObject1,res){

        
        //first we will check user id is there or not
        User.findOne(userObject,(err,doc)=>{
            if(err){
                console.log("Can't Register Due to Error");
            }
            else{
               if(doc){
                    //if present then algo
                    
                    if(doc.user1=="0")
                    {
                        //user1 is vacant and will fill the value
                        const d={
                            user1:userObject1.press    
                        }
                        User.updateOne({userid:userObject.userid},d,(err,doc)=>{
                            if(err){
                                console.log("value update error");
                            }
                            else{
                                console.log("doc is ",doc);
                                
                                }
                            }
                        )
                    }
                    else
                    {
                        if(doc.user2=="0")
                        {
                        

                            const d1={
                                user2:userObject1.press    
                            }
                            User.updateOne({userid:userObject.userid},d1,(err,doc)=>{
                                if(err){
                                    console.log("value update error");
                                }
                                else{
                                    console.log("doc is ",doc);
                                    
                                    }
                                }
                            )

                        }
                    else
                        {
                            if(doc.user1=="1" && doc.user2=="2")
                            {
                                console.log("user 1 won");
                            }
                            else if(doc.user1=="2" && doc.user2=="3")
                            {
                                console.log("user 1 won");
                            }
                            else if(doc.user1=="3" && doc.user2=="1")
                            {
                                console.log("user 1 won");
                            }
                            else if(doc.user1=="1" && doc.user2=="3")
                            {
                                console.log("user 2 won");
                            }
                            else if(doc.user1=="3" && doc.user2=="1")
                            {
                                console.log("user 2 won");
                            }
                            else if(doc.user1=="3" && doc.user2=="2")
                            {
                                console.log("user 2 won");
                            }
                        }
                    }

               }

               else
               {
                   // will create new username
                   const userObject2=
                   {
                    userid:userObject.userid,
                    user1:userObject1.press,
                    user2:"0"
                }
                   User.create(userObject2,(err)=>{   // sytax would be schema onject.create and data object from client in params
                    if(err){
                        console.log("oh yeah error");
                    }
                    else{
                        console.log("Register SuccessFully");
                    }
                    


                })
               }
            }
        })
        
    }
}

        /*
User.findOne(userObject,(err,doc)=>{
    if(err){
        console.log("Can't Register Due to Error");
    }
    else{
        console.log("doc is ",doc);
        if(doc && doc.userid){
            res.send("yes exist  "+doc.userid);
        }
        else{
            res.send('Invalid Userid');
        }
    }
})*/





module.exports = userOperations;



