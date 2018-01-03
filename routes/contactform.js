var express = require('express');
var router = express.Router();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
        subject: 'Kontaktanfrage Giftrit',
        text: text,
        html: '<span>' + text + '</span>'
    };

    sgMail.send(msg);

    res.status(200)
        .json({
            status: 'success',
            message: 'Email sent successfully'
        });
});

module.exports = router;