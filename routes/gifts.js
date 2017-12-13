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
 *       - Gift
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

/**
 * @swagger
 * /api/gifts/{id}:
 *   get:
 *     tags:
 *       - Gift
 *     description: Returns a single gift
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Gift's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single gift
 *         schema:
 *           $ref: '#/definitions/Gift'
 */
router.get('/api/gifts/:id', db.getSingleGift);

/**
 * @swagger
 * /api/gifts:
 *   post:
 *     tags:
 *       - Gift
 *     description: Creates a new gift
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: gift
 *         description: Gift object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Gift'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/gifts', db.createGift);

/**
 * @swagger
 * /api/gifts/{id}:
 *   put:
 *     tags:
 *       - Gift
 *     description: Updates a single gift
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Gifts's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: gift
 *         description: Gift object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Gift'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/api/gifts/:id', db.updateGift);

/**
 * @swagger
 * /api/gifts/{id}:
 *   delete:
 *     tags:
 *       - Gift
 *     description: Deletes a single gift
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Gift's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/api/gifts/:id', db.removeGift);

module.exports = router;