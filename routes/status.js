const express = require('express');
const router = express.Router();

const db = require('../queries/status');

/**
 * @swagger
 * definitions:
 *   Status:
 *     properties:
 *       id:
 *         type: integer
 *       value:
 *         type: string
 */

/**
 * @swagger
 * /api/status:
 *   get:
 *     tags:
 *       - Status
 *     description: Returns all status
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of status
 *         schema:
 *           $ref: '#/definitions/Status'
 */
router.get('/api/status', db.getAllStatus);


module.exports = router;