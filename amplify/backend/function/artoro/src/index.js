const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const validator = require("validator");

// Assuming creds.js is properly set up in your Lambda deployment package
const creds = require("./creds.js");

exports.handler = async (event) => {
  // Parse request body from event
  let requestBody;
  try {
    requestBody = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid request body" }),
    };
  }

  // Validate email, name, and message
  if (
    !validator.isEmail(requestBody.email) ||
    !validator.isAscii(requestBody.name) ||
    !validator.isAscii(requestBody.message)
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid input" }),
    };
  }

  // Attempt to send the email
  try {
    await sendEmail(requestBody.name, requestBody.email, requestBody.message);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email" }),
    };
  }
};

async function sendEmail(name, emailAddress, message) {
  const oauth2Client = new OAuth2(
    creds.clientId,
    creds.clientSecret,
    "https://developers.google.com/oauthplayground" // Redirect URI set in your Google Cloud Console
  );

  oauth2Client.setCredentials({
    refresh_token: creds.refreshToken,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :( ");
      }
      resolve(token);
    });
  });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: creds.user, // Your Gmail address
      clientId: creds.clientId,
      clientSecret: creds.clientSecret,
      refreshToken: creds.refreshToken,
      accessToken: accessToken,
    },
  });

  let mailOptions = {
    from: emailAddress, // Sender address
    to: "rachelrj29@gmail.com", // List of receivers
    subject: `Message from ${name}`, // Subject line
    text: `${message}\n\nReply to: ${emailAddress}`, // Plain text body
  };

  await transporter.sendMail(mailOptions);
}
