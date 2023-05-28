const express = require("express");
const db = require("../database/queries");
const characters = require("../character/characterController");
const router = express.Router();

const character_v2_router = require("express").Router();
const character_v1_router = require("express").Router();

/**
 * @swagger
 *
 * /api/v2/characters:
 *   get:
 *     tags:
 *       - "Characters"
 *     summary: "Get all Characters"
 *     description: Retrieve all Characters Rick and Morty.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Character List
 *       204:
 *         description: There are no Character
 */
character_v2_router.get("/", characters.findAll)


/**
 * @swagger
 *
 * /api/v2/characters/{id}:
 *   get:
 *     tags:
 *       - "Characters"
 *     summary: "Retrieve a Character by Id"
 *     description: Get a Character object by specifying its id. The response is Character object.
 *     parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of character to return"
 *        required: true
 *        type: "integer"
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Character object
 */
character_v2_router.get("/:id", characters.findById)


/**
 * @swagger
 * /api/v2/characters:
 *   post:
 *     tags:
 *       - "Characters"
 *     summary: "Create an character."
 *     description: Create a new Character.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Character name.
 *                 example: "Rick Sanchez"
 *               status:
 *                 type: string
 *                 description: Character status.
 *                 example: "Alive"
 *               species:
 *                 type: string
 *                 description: Character specie.
 *                 example: "Human"
 *               type:
 *                 type: string
 *                 description: Character specie.
 *                 example: ""
 *               gender:
 *                 type: string
 *                 description: Character gender.
 *                 example: "Male"
 *               image:
 *                 type: string
 *                 description: Character image.
 *                 example: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
 *               url:
 *                 type: string
 *                 description: Character url.
 *                 example: "https://rickandmortyapi.com/api/character/1"
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: Episode object
 */
character_v2_router.post("/", characters.createCharacter)


/**
 * @swagger
 * /api/v2/characters/{id}/episodes:
 *   post:
 *     tags:
 *       - "Characters"
 *     summary: "Add episodes on character."
 *     description: Create a new Character.
 *     parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of character to return"
 *        required: true
 *        type: "integer"
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: Episode object
 */
character_v2_router.post("/:id/episodes", characters.addEpisodeOnCharacter)

character_v1_router
    .get('/', db.getCharacters)
    .get('/:id', db.getUserById)
    .post('/', db.createCharacter)
    .put('/:id', db.updateCharacter)
    .delete('/:id', db.deleteCharacter)
    .use((req, res) => {
        res.status(404);
        res.json({
            error: "Page not found"
        });
    });

router.use('/api/v2/characters', character_v2_router)
router.use('/api/v1/characters', character_v1_router)

module.exports = router;