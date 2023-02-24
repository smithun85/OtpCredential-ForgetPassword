 const mongoose = require('mongoose');
const JWT = require("jsonwebtoken")

// import { mongoose } from 'mongoose'
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
        minlength: [6, "Password must be least 6 char long"]
    },

    avatar:{
        public_id:String,
        url: String
    },
    
    createdAt: {
        type:Date,
        default:Date.now
    },

    task:[ {
        title: String,
        description:String,
        completed:String,
        createdAt: Date
    }],

    varified:{
        type:Boolean,
        default:false
    },

    otp: Number,
    otp_expiry: Date

});

userSchema.methods.getJWTToken = async function() {
    const token = await JWT.sign({_id:this._id}, process.env.JWT_SECURE, { 
        expiresIn: process.env.JWT_COOKIE_EXPIRE
    })
    return token
}


const User = mongoose.model('User', userSchema)

module.exports = User
