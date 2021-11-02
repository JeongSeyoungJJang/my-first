const express = require("express");
const app = express();
const PORT = 5000;

const bodyParser = require("body-parser")

const config = require("./config/key.config")
const { User } = require("./models/User.model");

const mongoose = require("mongoose");
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology : true,
}).then(()=>console.log("mongo connected")).catch("error")


// ! application/x-www-form-urlencoded 분석해서 가져오는
app.use(bodyParser.urlencoded({extended:true}));
// ! json타입 데이터를 분석
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Hello")
})


app.post("/register",(req,res)=>{
    // * 회원 가입할 떄 필요한 정보들을 클라이언트에서 가져오면
    // * 그것들을 디비에 넣는다.

    const user = new User(req.body);
    user.save((err,userInfo)=> {
        if(err) return res.json({success:false, err})
        return res.status(200).json({success : true })
    })
})
app.listen(PORT,() => {
    console.log("Server is running")
})