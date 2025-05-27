const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  const { name, email, subject, message } = JSON.parse(event.body || '{}');

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: subject || "📩 New Portfolio Message",
    text: `
You have received a new message from your portfolio:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}

Time: ${new Date().toLocaleString()}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message || "Internal Server Error" }),
    };
  }
};
