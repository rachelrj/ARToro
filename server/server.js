const path = require('path');
const express = require('express');
// const nodemailer = require('nodemailer');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
// app.post('/email', (req, res) => {
//    var transporter = nodemailer.createTransport({
// 	  service: 'gmail',
// 	  auth: {
// 	    user: 'rachelrj29@gmail.com',
// 	    pass: '08281991boulderCO?'
// 	  }
// 	});

// 	var mailOptions = {
// 	  from: 'rachelrj29@gmail.com',
// 	  to: 'rachelrj29@umich.edu',
// 	  subject: 'Sending Email using Node.js',
// 	  text: 'That was easy!'
// 	};

// 	transporter.sendMail(mailOptions, function(error, info){
// 	  if (error) {
// 	    console.log(error);
// 	  } else {
// 	    console.log('Email sent: ' + info.response);
// 	  }
// 	});
// });
app.listen(port, () => {
   console.log('Server is up!');
});