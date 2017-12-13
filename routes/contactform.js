var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

var API_KEY = process.env.MAILGUN_API_KEY;
var MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;

var auth = {
    auth: {
        api_key: API_KEY,
        domain: MAILGUN_DOMAIN
    }
};

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
 *     responses:
 *       200:
 *         description: Successfully sent
 */
router.post('/api/contact', function (req, res) {
    var from = req.body.from;
    var text = req.body.text;
    var isError = false;

    console.log('\nCONTACT FORM DATA: '+ from + ': ' + text + '\n');

    // create transporter object capable of sending email using the default SMTP transport
    var transporter = nodemailer.createTransport(mg(auth));

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: from, // sender address
        to: 'ralph.koster@students.ffhs.ch', // list of receivers
        subject: 'Contact-Message from Giftrit', // Subject line
        text: text,
        err: isError

    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('\nERROR: ' + error + '\n');
            res.status(500)
                .json({
                    status: 'error',
                    message: 'Failed to send email'
                });
        } else {
            console.log('\nRESPONSE SENT: ' + info.response + '\n');
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Email sent successfully'
                });
        }
    });
});

module.exports = router;