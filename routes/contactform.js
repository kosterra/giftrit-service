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
 *     description: Creates a contact message
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

});