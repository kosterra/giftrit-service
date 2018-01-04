const express = require('express');
const router = express.Router();

const db = require('../queries/gifts');

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
    // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://innt.eu.auth0.com/.well-known/jwks.json'
    }),

    // Validate the audience and the issuer.
    audience: 'https://innt.eu.auth0.com/userinfo',
    issuer: 'https://innt.eu.auth0.com',
    algorithms: ['RS256']
});

/**
 * @swagger
 * definitions:
 *   Gift:
 *     properties:
 *       id:
 *         type: integer
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       amount:
 *         type: number
 *       created:
 *         type: string
 *       modified:
 *         type: string
 *       userId:
 *         type: integer
 *       karma:
 *         type: integer
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
router.post('/api/gifts', checkJwt, db.createGift);

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