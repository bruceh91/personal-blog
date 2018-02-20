import mailgunLoader from 'mailgun-js'
let mailgun = mailgunLoader({ apiKey: process.env.MAILGUN_SK, domain: 'sandboxa144e3a2cfe74afc9e1c4ca49d2ee50d.mailgun.org'})

function sendEmail(to, from, subject, content) {
    let data = {
        from,
        to,
        subject,
        html: content
    }
    return mailgun.messages().send(data)
}

export { sendEmail }