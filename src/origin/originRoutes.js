const express = require("express");
const origins = require("./originController");
const router = express.Router();

const origin_v2_router = require("express").Router();

/**
 * @swagger
 * /api/v2/origin:
 *   get:
 *     tags:
 *       - "Origins"
 *     summary: "Get all Origins"
 *     description: Retrieve all Origins Rick and Morty.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Origin List
 *       204:
 *         description: There are no Origin
 *
 */
origin_v2_router.get("/", origins.findAll)

/**
 * @swagger
 * /api/v2/origin/{id}:
 *   get:
 *     tags:
 *       - "Origins"
 *     summary: "Get an Origin by his ID."
 *     description: Get a Origin object by specifying its id. The response is Character object.
 *     parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of Origin to return"
 *        required: true
 *        type: "integer"
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Origin object
 */
origin_v2_router.get("/:id", origins.findById)

/**
 * @swagger
 * /api/v2/origin:
 *   post:
 *     tags:
 *       - "Origins"
 *     summary: "Create an Origin."
 *     description: Create a new Origin.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL Origin.
 *                 example: "https://rickandmortyapi.com/api/Origin/1"
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Origin object
 */
origin_v2_router.post("/", origins.createOrigin)

/**
 * @swagger
 * /api/v2/origin/{id}:
 *   delete:
 *     tags:
 *       - "Origins"
 *     summary: "Delete an Origin by his ID."
 *     description: Delete a Origin object by specifying its id. The response is Character object.
 *     parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of Origin to Delete"
 *        required: true
 *        type: "integer"
 *     produces:
 *       - application/json
 *     responses:
 *       204:
 *         description: No content
 */
origin_v2_router.delete("/:id", origins.removeOrigin)

router.use('/api/v2/origin', origin_v2_router)

module.exports = router;