const express = require("express");
const characterRoutes = require('./character/characterRoutes');
const episodeRoutes = require('./episode/episodeRoutes');

const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require("./config/swagger");

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// simple route
/**
 * @Swagger
 *
 * /:
 *   get:
 *     tags:
 *       - "Iaorana World!"
 *     summary: "Iaorana World!"
 *     description: Iaorana World!.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: String
 */
app.get("/", (req, res) => {
    res.status(200).json("Iaoarana world!!");
});

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Add Character Routes
app.use(characterRoutes); // Requests proc
app.use(episodeRoutes); // Requests proc

module.exports = app;
