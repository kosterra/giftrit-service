var express = require('express');
var router = express.Router();

var db = require('../queries/karmas');

/**
 * @swagger
 * definitions:
 *   Karma:
 *     properties:
 *       id:
 *         type: integer
 *       amount:
 *         type: number
 *       karmapoints:
 *         type: integer
 */

/**
 * @swagger
 * /api/karmas:
 *   get:
 *     tags:
 *       - Karma
 *     description: Returns all karmas
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of karmas
 *         schema:
 *           $ref: '#/definitions/Karma'
 */
router.get('/api/karmas', db.getAllKarmas);


module.exports = router;