const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())
var nodeMailer = require("nodemailer")
const transporter = nodeMailer.createTransport({
    port : 465,
    auth :{
        host:"",
        pass:""
    },
    secure : true ,
    host :"smtp.gmail.com"
    
})
server.listen(process.env.PORT || 3030);