/* export default function (req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')

    const PASSWORD = process.env.GMAIL_KEY

    const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: '1affirmed1@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  })

  const mailData = {
    from: '1affirmed1@gmail.com',
    to: 'construction@lawfullywhite.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: <div>{req.body.message}</div>,
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })
  
  console.log(req.body)

    
  res.send('success')

} */

"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(req) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '1affirmed1@gmail.com', // generated ethereal user
      pass: 'dumb1sha', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Contact Form 👻" <1affirmed1@gmail.com>', // sender address
    to: "construction@lawfullywhite.com, charlyisbak@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: (req.body.message).toString(), // plain text body
    html: req.body.message, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);