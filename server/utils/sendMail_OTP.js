const nodemailer = require('nodemailer')

//send mail in Gmail

const sendMails = async (email, subject, text) => {

   // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for SMTP_PORT, false for other ports
    auth: {
      user:process.env.SMTP_USER, // generated gmail user
      pass:process.env.SMTP_PASS, // generated gmail password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from:  '"testing 👻" <test@example.com>', // sender address
    to: email, // list of receivers
    subject,
    text
  }, function(err,data){
    if(err){
      console.log("error occur",err)
    }else{
      console.log("Message sent: " , data);
    }
  });

 
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL %s:", nodemailer.getTestMessageUrl(info));
}


//send mail in mailtrap

// const sendMails = async (email, subject, text) => {

//   // create reusable transporter object using the default SMTP transport
//   const transporter = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "822ebcb6f34e0a",
//       pass: "6baf5dab762f15"
//     }
// })

//  // send mail with defined transport object
//  const info = await transporter.sendMail({
//    from:  '"hello, 👻" <foo@example.com>', // sender address
//    to: email, // list of receivers
//    subject,
//    text
//  })
// }

module.exports = sendMails
