"use strict";
const creds = require("./creds.js");
const path = require('path');
const express = require('express');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
var validator = require('validator');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.post('/email', (req, res) => {
	if (validator.isEmail(req.body.email) &&
		validator.isAscii(req.body.name) && 
		validator.isAscii(req.body.message)) {
		sendEmail(req.body.name, req.body.email, req.body.message);
		res.send('OK')
	} else {
		throw new Error('Could not send email')
	}
});
app.listen(port, () => {
   console.log('Server is up!');
});
const oauth2Client = new OAuth2(
	creds.clientId,
	creds.clientSecret,
	creds.redirectUri,
)
async function sendEmail(name, emailAddress, message) {
  	oauth2Client.setCredentials({
    	refresh_token: creds.refreshToken
	});
	const accessToken = oauth2Client.getAccessToken()
	let transporter = nodemailer.createTransport({
	    host: 'smtp.gmail.com',
	    port: 465,
	    secure: true,
	    auth: {
	        type: 'OAuth2',
	        user: creds.user,
	        clientId: creds.clientId,
	        clientSecret: creds.clientSecret,
	        refreshToken: creds.refreshToken,
	        accessToken: accessToken
	    },
	    tls: {
	  		rejectUnauthorized: false
		}
	});

  let info = await transporter.sendMail({
    from: emailAddress,
    to: "toro4art@gmail.com",
    subject: "A message from " + name + " on ARToro website",
    text: message + "\n\n reply to " + emailAddress,
  });

  console.log("Message sent: %s", info.messageId);

  transporter.close()
}

