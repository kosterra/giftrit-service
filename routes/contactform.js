const express = require('express');
const router = express.Router();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const jwt = require('../helpers/jwt');

/**
 * @swagger
 * definitions:
 *   Contact:
 *     properties:
 *       from:
 *         type: string
 *       text:
 *         type: string
 */

/**
 * @swagger
 * /api/contact:
 *   post:
 *     tags:
 *       - Contact
 *     description: Creates and sends a contact message
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: Contact object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *       - name: Authorization
 *         in: header
 *         description: the authorization header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully sent
 */
router.post('/api/contact', jwt.checkJwt, function (req, res, next) {
    let from = req.body.from;
    let text = req.body.text;

    console.log('\nCONTACT FORM DATA: ' + from + ': ' + text + '\n');

    const msg = {
        to: 'ralph.koster@students.ffhs.ch',
        from: from,
        subject: 'Kontaktanfrage Giftrit',
        text: text,
        html: '<span>' + text + '</span>'
    };

    sgMail.send(msg)
        .then(function () {
            res.status(200).json({
                status: 'success',
                message: 'Email sent successfully'
            });
        })
        .catch(function (err) {
            return next(err);
        });
});

module.exports = router;