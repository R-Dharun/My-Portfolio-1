const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
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
    subject: "🚀 Portfolio Visitor",
    text: `Someone visited your portfolio at ${new Date().toLocaleString()}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent!");
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent!" }),
    };
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
