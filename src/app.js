const express = require("express");
const characterRoutes = require('./character/characterRoutes');
const episodeRoutes = require('./episode/episodeRoutes');
const locationRoutes = require('./location/locationRoutes');
const originRoutes = require('./origin/originRoutes');

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

const db = require("./config/db.config");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });


// simple route
/**
 * @Swagger
 *
 * /api/v2:
 *   get:
 *     tags:
 *       - "World"
 *     summary: "Iaorana World!"
 *     description: Iaorana World!.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: String
 */
app.get("/api/v2", (req, res) => {
    res.status(200).json("ʻIa orana World!!");
});

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Add Routes
app.use(characterRoutes); // Requests proc
app.use(episodeRoutes); // Requests proc
app.use(locationRoutes); // Requests proc
app.use(originRoutes); // Requests proc

module.exports = app;
