const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'khoatranpc603@gmail.com',
        pass: 'mdockoodfbuosgjj'
    }
})


let mailOSetting = (OTP,mailAddress)=>{
    let mailOptions = {
        from: 'khoatranpc603@gmail.com',
        to: mailAddress,
        subject: 'OTP Verify your email',
        text: OTP
    }
    return mailOptions;
}
//otp must have type string
const mailer = async (req, res) => {
    const {OTP,email} = req.body;
    await transporter.sendMail(mailOSetting(OTP,email),  (error, info)=>{
        if (error) {
            console.log(error);
            res.end();
        } else {
            console.log('Email sent: ' + info.response);
            res.end();
        }
    });
}
module.exports = { mailer };