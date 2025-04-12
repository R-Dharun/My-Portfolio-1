const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "max.hunt356@gmail.com",         // 🔁 Replace with your Gmail
      pass: "hsdk exqw tpju ouxp",       // 🔁 Use App Password, NOT Gmail password
    },
  });

  const mailOptions = {
    from: "your_email@gmail.com",
    to: "your_email@gmail.com",
    subject: "🔔 Portfolio Visit Alert",
    text: `Hey! Someone just visited your portfolio at ${new Date().toLocaleString()}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
