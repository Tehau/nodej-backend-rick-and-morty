const express = require("express");
const episodes = require("./episodeController");
const router = express.Router();

const episode_v2_router = require("express").Router();

/**
 * @swagger
 * /api/v2/episodes:
 *   get:
 *     tags:
 *       - "Episodes"
 *     summary: "Get all Episodes"
 *     description: Retrieve all Episodes Rick and Morty.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Episode List
 *       204:
 *         description: There are no Episode
 *
 */
episode_v2_router.get("/", episodes.findAll)

/**
 * @swagger
 * /api/v2/episodes/{id}:
 *   get:
 *     tags:
 *       - "Episodes"
 *     summary: "Get an episode by his ID."
 *     description: Get a Episode object by specifying its id. The response is Character object.
 *     parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of Episode to return"
 *        required: true
 *        type: "integer"
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Episode object
 */
episode_v2_router.get("/:id", episodes.findById)

/**
 * @swagger
 * /api/v2/episodes:
 *   post:
 *     tags:
 *       - "Episodes"
 *     summary: "Create an episode."
 *     description: Create a new Episode.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL episode.
 *                 example: "https://rickandmortyapi.com/api/episode/1"
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Episode object
 */
episode_v2_router.post("/", episodes.createEpisode)

/**
 * @swagger
 * /api/v2/episodes/{id}:
 *   put:
 *     tags:
 *       - "Episodes"
 *     summary: "Update an episode."
 *     description: Update a new Episode.
 *     parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of Episode to Delete"
 *        required: true
 *        type: "integer"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL episode.
 *                 example: "https://rickandmortyapi.com/api/episode/1"
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: message
 */
episode_v2_router.put("/:id", episodes.updateEpisode)

/**
 * @swagger
 * /api/v2/episodes/{id}:
 *   delete:
 *     tags:
 *       - "Episodes"
 *     summary: "Delete an episode by his ID."
 *     description: Delete a Episode object by specifying its id.
 *     parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of Episode to Delete"
 *        required: true
 *        type: "integer"
 *     produces:
 *       - application/json
 *     responses:
 *       204:
 *         description: No content
 */
episode_v2_router.delete("/:id", episodes.removeEpisode)



router.use('/api/v2/episodes', episode_v2_router)

module.exports = router;