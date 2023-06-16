const express = require("express");
const locations = require("./locationController");
const router = express.Router();

const location_v2_router = require("express").Router();

/**
 * @swagger
 * /api/v2/locations:
 *   get:
 *     tags:
 *       - "Locations"
 *     summary: "Get all Locations"
 *     description: Retrieve all Locations Rick and Morty.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Location List
 *       204:
 *         description: There are no Location
 *
 */
location_v2_router.get("/", locations.findAll)

/**
 * @swagger
 * /api/v2/locations/{id}:
 *   get:
 *     tags:
 *       - "Locations"
 *     summary: "Get an Location by his ID."
 *     description: Get a Location object by specifying its id. The response is Character object.
 *     parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of Location to return"
 *        required: true
 *        type: "integer"
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Location object
 */
location_v2_router.get("/:id", locations.findById)

/**
 * @swagger
 * /api/v2/locations:
 *   post:
 *     tags:
 *       - "Locations"
 *     summary: "Create an Location."
 *     description: Create a new Location.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL Location.
 *                 example: "https://rickandmortyapi.com/api/Location/1"
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Location object
 */
location_v2_router.post("/", locations.createLocation)

/**
 * @swagger
 * /api/v2/locations/{id}:
 *   delete:
 *     tags:
 *       - "Locations"
 *     summary: "Delete an Location by his ID."
 *     description: Delete a Location object by specifying its id. The response is Character object.
 *     parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of Location to Delete"
 *        required: true
 *        type: "integer"
 *     produces:
 *       - application/json
 *     responses:
 *       204:
 *         description: No content
 */
location_v2_router.delete("/:id", locations.removeLocation)

router.use('/api/v2/locations', location_v2_router)

module.exports = router;