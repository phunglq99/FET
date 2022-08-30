const sgMail = require('@sendgrid/mail')

const APP_KEY = "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"

sgMail.setApiKey(APP_KEY);

const message = {
    to: 'phunglai1999@gmail.com',
    from:'phunglq@smartosc.com',
    subject: 'Phunglai',
    text: 'Hello',
    template_id: 'd-08376baa15bc41a7b73900dad14920d6',
}

sgMail.send(message)
.then(res => console.log('Email sent ....'))
.catch(err => console.log(err.message))