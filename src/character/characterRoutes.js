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