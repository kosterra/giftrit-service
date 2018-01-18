const express = require('express');
const router = express.Router();

const db = require('../queries/users');

const jwt = require('../helpers/jwt');

/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       id:
 *         type: integer
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
 *       statusId:
 *         type: integer
 *       karma:
 *         type: integer
 *       description:
 *         type: string
 *       imageUrl:
 *         type: string
 *       authId:
 *         type: string
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - User
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

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - User
 *     description: Returns a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single user
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/api/users/:id', db.getSingleUser);

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - User
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *       - name: Authorization
 *         in: header
 *         description: the authorization header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/User'
 *       401:
 *         description: Unauthorized
 */
router.post('/api/users', jwt.checkJwt, db.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags:
 *       - User
 *     description: Updates a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *       - name: Authorization
 *         in: header
 *         description: the authorization header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully updated
 *       401:
 *         description: Unauthorized
 */
router.put('/api/users/:id', jwt.checkJwt, db.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - User
 *     description: Deletes a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: Authorization
 *         in: header
 *         description: the authorization header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       401:
 *         description: Unauthorized
 */
router.delete('/api/users/:id', jwt.checkJwt, db.removeUser);


module.exports = router;
