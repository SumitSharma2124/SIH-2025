// src/services/notificationService.js
const nodemailer = require("nodemailer");

// ✅ Email Notification Service
exports.sendEmailNotification = async (to, subject, message) => {
  try {
    // transporter setup (use Gmail or any SMTP service)
    const transporter = nodemailer.createTransport({
      service: "gmail", // you can use: "hotmail", "yahoo", or custom SMTP
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    return true;
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw new Error("Failed to send email notification");
  }
};

// ✅ Push Notification Service (Dummy for now, can extend to Firebase or OneSignal)
exports.sendPushNotification = async (userId, message) => {
  try {
    // Here you can integrate Firebase Cloud Messaging (FCM) or OneSignal
    console.log(`📲 Push notification to ${userId}: ${message}`);
    return true;
  } catch (error) {
    console.error("❌ Error sending push notification:", error.message);
    throw new Error("Failed to send push notification");
  }
};
