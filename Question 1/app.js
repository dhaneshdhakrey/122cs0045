/*we have to implement which make calls to 5 other api and after getting response from the server we have to apply custom filters to  the the products in response and then give the response back*/
const TopUsers=require('./TopUsers.js')
const TopPosts=require('./TopPosts.js')
const cors=require('cors');
const bodyParser = require("body-parser");
const express=require("express");

let PORT=8000;
let app=express();
app.use(bodyParser.json());
app.use(cors({
    origin:'http://localhost:3000',
    // methods:["GET","POST"],
    // allowedHeaders
}))
// app.use(rateLimit({windowMS:6000,max:20}))

function startserver(){
   try{ app.listen(PORT,()=>{
        console.log("server is stasrtd", PORT);
    })}
    catch(error){
        console.log(error);
    }
}
app.get("/",(req,res)=>{
    res.status(200).json("hello from server");
})
app.get("/users",TopUsers);
app.get("/posts/",TopPosts);

startserver();