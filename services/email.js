const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendEmail = async ({ to, subject, html, text }) => {
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to,
        subject,
        text,
        html,
    };

    return await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;