import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async ({ sendTo, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Blinkeyit" <${process.env.EMAIL_USER}>`,
      to: sendTo,
      subject: subject,
      html: html,
    });

    //console.log("✅ Email sent successfully:", info.response);
  } catch (error) {
    //console.error("❌ Error sending email:", error);
  }
};

export default sendEmail;
