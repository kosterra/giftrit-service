var express = require('express');
var router = express.Router();

var db = require('../queries/gifts');

/**
 * @swagger
 * definitions:
 *   Gift:
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