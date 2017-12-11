var express = require('express');
var router = express.Router();

var db = require('../queries/donations');

/**
 * @swagger
 * definitions:
 *   Donation:
 *     properties:
 *       id:
 *         type: long
 *       amount:
 *         type: double
 *       created:
 *         type: date
 *       giftId:
 *         type: long
 *       userId:
 *         type: long
 *       karma:
 *         type: long
 */

/**
 * @swagger
 * /api/donations:
 *   get:
 *     tags:
 *       - donations
 *     description: Returns all donations
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of donations
 *         schema:
 *           $ref: '#/definitions/Donation'
 */
router.get('/api/donations', db.getAllDonations);

/**
 * @swagger
 * /api/donations/{id}:
 *   get:
 *     tags:
 *       - donations
 *     description: Returns a single donation
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Donation's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single donation
 *         schema:
 *           $ref: '#/definitions/Donation'
 */
router.get('/api/donations/:id', db.getSingleDonation);

/**
 * @swagger
 * /api/donations:
 *   post:
 *     tags:
 *       - donations
 *     description: Creates a new donation
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: donation
 *         description: Donation object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Donation'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/donations', db.createDonation);

module.exports = router;