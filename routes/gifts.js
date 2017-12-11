var express = require('express');
var router = express.Router();

var db = require('../queries/gifts');

/**
 * @swagger
 * definitions:
 *   Gift:
 *     properties:
 *       id:
 *         type: long
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       created:
 *         type: date
 *       modified:
 *         type: date
 *       userId:
 *         type: long
 *       karma:
 *         type: long
 */

/**
 * @swagger
 * /api/gifts:
 *   get:
 *     tags:
 *       - gifts
 *     description: Returns all gifts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of gifts
 *         schema:
 *           $ref: '#/definitions/Gift'
 */
router.get('/api/gifts', db.getAllGifts);


module.exports = router;