var express = require('express');
var router = express.Router();

var db = require('../queries/donations');

/**
 * @swagger
 * definitions:
 *   Donation:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
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