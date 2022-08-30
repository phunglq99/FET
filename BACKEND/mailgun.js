var api_key = '5f6111131e9bd010f07682166d0232e8-c76388c3-92c8888f';
const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxd911fad9c44a4294aeb6375e04778677.mailgun.org';
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
var data = {
  from: 'phunglq@smartosc.com',
  to: 'phunglai1999@gmail.com',
  subject: 'Hello world!',
  text: 'Testing some Mailgun awesomeness!'
};
 
mg.messages().send(data, function (error, body) {
	console.log(body);
});