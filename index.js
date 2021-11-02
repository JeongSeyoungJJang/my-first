const express = require("express");
const app = express();
const PORT = 5000;

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dfrsvg:qwer1234@cluster0.1pivy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser : true, useUnifiedTopology : true,
}).then(()=>console.log("mongo connected")).catch("error")


app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,() => {
    console.log("Server is running")
})