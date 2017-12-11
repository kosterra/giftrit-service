var express = require('express');
var router = express.Router();

var db = require('../queries/users');

/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       id:
 *         type: long
 *       firstname:
 *         type: string
 *       lastname:
 *         type: string
 *       phone:
 *         type: string
 *       email:
 *         type: string
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       statusId:
 *         type: long
 *       karma:
 *         type: long
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/api/users', db.getAllUsers);


module.exports = router;