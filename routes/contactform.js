var express = require('express');
var router = express.Router();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

    console.log('\nCONTACT FORM DATA: '+ from + ': ' + text + '\n');

    const msg = {
        to: 'ralph.koster@students.ffhs.ch',
        from: from,
        subject: 'Contact-Message from Giftrit',
        text: text,
        html: '<strong>text</strong>'
    };

    res.status(sgMail.send(msg));
});

module.exports = router;