const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'cullenpaul79@gmail.com',
        subject: 'Welcome! Thank you for joining',
        text: `Welcome to the app ${name}`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'cullenpaul79@gmail.com',
        subject: 'User profile deleted',
        text: `Hello ${name}. We are sorry to see you go. Please come back soon.`
    })
}

module.exports = { sendWelcomeEmail, sendCancelEmail }