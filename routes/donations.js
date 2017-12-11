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


module.exports = router;