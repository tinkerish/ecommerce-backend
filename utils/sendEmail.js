const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_USER, // 8fa4d2001@smtp-brevo.com
        pass: process.env.BREVO_PASS, // Your generated Brevo SMTP password
      },
    });

    const info = await transporter.sendMail({
      from: process.env.BREVO_SENDER,
      to,
      subject,
      text,
    });

    console.log('Email sent successfully:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
module.exports = sendEmail;