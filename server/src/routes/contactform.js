import { Router } from 'express'
import { sendEmail } from '../utils/mail'

let router = Router()

router.post('/', (req, res, next) => {
    let messageBody = `Name: ${req.body.name}
                       Email: ${req.body. email}
                       Message: ${req.body.message}`
    sendEmail('bruceharris91@gmail.com', 'Bruce-Harris-Blog@blogy.com', 'New Contact Form Submission', messageBody)
    .then((response) => {
        res.sendStatus(201)
    }).catch((err) => {
        next(err)
    })
})

export default router;``