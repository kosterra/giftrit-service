const express = require('express');
const router = express.Router();

const db = require('../queries/donations');

const jwt = require('../helpers/jwt');

/**
 * @swagger
 * definitions:
 *   Donation:
 *     properties:
 *       id:
 *         type: integer
 *       amount:
 *         type: number
 *       created:
 *         type: string
 *       giftId:
 *         type: integer
 *       userId:
 *         type: integer
 *       karma:
 *         type: number
 */

/**
 * @swagger
 * /api/donations:
 *   get:
 *     tags:
 *       - Donation
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
 *       - Donation
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
 *       - Donation
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
 *       - name: Authorization
 *         in: header
 *         description: the authorization header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully created
 *       401:
 *         description: Unauthorized
 */
router.post('/api/donations', jwt.checkJwt, db.createDonation);

module.exports = router;