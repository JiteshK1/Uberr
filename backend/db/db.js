const mongoose = require('mongoose');
const connect = process.env.DB_CONNECT

function connectDB(){
     mongoose.connect(connect)
    .then(() => console.log('Connected! to DB'));
}

module.exports = connectDB