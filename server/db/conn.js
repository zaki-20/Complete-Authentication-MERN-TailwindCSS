const mongoose = require("mongoose");

const DB = "mongodb+srv://zakibutt199:qwerty123@cluster0.qqyp1kd.mongodb.net/auth-login-signup?retryWrites=true&w=majority"

mongoose.connect(DB,{
   
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})