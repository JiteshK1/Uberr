const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    fullName : {
        firstName :{
            type : String,
            required: true,
            minlength:[3,"firstName should be more then 3 character"]
        },
        lastName :{
            type : String,
            minlength:[3,"lastName should be more then 3 character"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[6,"email should be more then 6 character"]

    },
    password:{
        type:String,
        required:true,
        minlength:6,
        select: false
    },
    socketId:{
        type:String,
        required:false
    }
})
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};
userSchema.methods.comparePassword = async function (inputPassword) {
    if (!this.password) {
        throw new Error("Password not available for comparison");
    }
    return await bcrypt.compare(inputPassword, this.password);
};
 userSchema.statics.hashPassword = async function (inputPassword) {
    if (typeof inputPassword !== 'string' || inputPassword.length === 0) {
        throw new Error("Password must be a non-empty string");
    }
    return bcrypt.hash(inputPassword, 10);
};
 const userModel =mongoose.model('user', userSchema)
 module.exports = userModel;