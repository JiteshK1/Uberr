const express = require("express");
const connectDB = require("./db/db")
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/user.route');
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/" , (req , res)=>{
    console.log("O")
    res.send("HELLo")
})

app.use('/users', userRoutes);
module.exports = app;
