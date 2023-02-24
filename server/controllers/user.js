const User = require("../models/user");
const  sendMails  = require("../utils/sendMail_OTP");
const  sendToken  = require("../utils/sendToken");

const register = async (req, res) => {
    try {
      const {name, email, password } = req.body;

      // const {avatar} = req.files
       
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          success: false,
          message: "user already exist",
        });
      }

      const otp = Math.floor(Math.random() * 1000000)
  
      user = await User.create({
        name,
        email,
        password,
        avatar:{
          public_id:"",
        url: ""
        },
        otp,
        otp_expiry:new Date(Date.now() + process.env.OTP_EXPIRE * 60 * 1000)
      });

      await sendMails(email,"Varify your account", `Your OTP is ${otp}.\nOTP is valid only for 10minutes`,)

      sendToken(res, user, 200, "OTP send to your email,please verify your account"); //send the res using function from utils
     
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
            status: "server error",
          });
    }
};



module.exports ={ register }
  