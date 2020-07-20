const nodemailer = require('nodemailer');
const mailChecker = require('mailchecker');
const User = require('../models/User');

exports.sendEmail = (mailTo, from, subject, message) => {
  let transporter = nodemailer.createTransport({
    auth: {
      user: process.env.SENDGRID_USER,
      pass: process.env.SENDGRID_PASSWORD,
    },
  });
  const mailOptions = {
    to: mailTo,
    from: process.env.EMAIL,
    subject: subject,
    text: message,
  };
  return transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log(`Email has been sent to ${mailTo}`);
    })
    .catch((err) => {
      if (err.message === 'self signed certificate in certificate chain') {
        console.log(
          'WARNING: Self signed certificate in certificate chain. Retrying with the self signed certificate. Use a valid certificate if in production.'
        );
        transporter = nodemailer.createTransport({
          service: 'SendGrid',
          auth: {
            user: process.env.SENDGRID_USER,
            pass: process.env.SENDGRID_PASSWORD,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });
        return transporter.sendMail(mailOptions).then(() => {
          req.flash('info', {
            msg: `An e-mail has been sent to ${req.user.email} with further instructions.`,
          });
        });
      }
      console.log(
        'ERROR: Could not send verifyEmail email after security downgrade.\n',
        err
      );
      return err;
    });
};
