const express = require("express");

const app = express();


app.get("/" , (req , res)=>{
    console.log("O")
    res.send("HELLo")
})
module.exports = app;
