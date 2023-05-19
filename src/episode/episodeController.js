// const asyncHandler = require("express-async-handler");
const Episode = require("./episodeModel");

/***
 *
 * @param req
 * @param res
 */
const findAll = (req, res) => {
    Episode.findAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};

/***
 *
 * @param id
 * @param req
 * @param res
 */
const findById = (req, res) => {
    const id = req.params.id;
    Episode.findById(id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Episodes."
            });
        else res.send(data);
    });
};

/***
 *
 * @param req
 * @param res
 */
const createEpisode = (req, res) => {
    if (req.body.url) {
        Episode.create(req.body.url, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating Episodes."
                });
            else res.send(data);
        });
    } else {
        res.status(400).send({
            message:  "Some error occurred while creating Episodes."
        });
    }
}

const removeEpisode = (req, res) => {
    const id = req.params.id;
    Episode.remove(id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Episodes."
            });
        else res.send(data);
    });
}

module.exports = {
    findAll,
    findById,
    createEpisode,
    removeEpisode
}

