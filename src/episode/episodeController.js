// const asyncHandler = require("express-async-handler");
const db = require("./index");
const Episode = db.episodes;
const Op = db.Sequelize.Op;

/***
 *
 * @param req
 * @param res
 */
exports.findAll = (req, res) => {
    // Episode.findAll((err, data) => {
    //     if (err)
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while retrieving tutorials."
    //         });
    //     else res.send(data);
    // });
    Episode.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving episodes."
            });
        });
};

/***
 *
 * @param id
 * @param req
 * @param res
 */
exports.findById = (req, res) => {
    // const id = req.params.id;
    // Episode.findById(id, (err, data) => {
    //     if (err)
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while retrieving Episodes."
    //         });
    //     else res.send(data);
    // });
};

/***
 *
 * @param req
 * @param res
 */
exports.createEpisode = (req, res) => {
    // if (req.body.url) {
    //     Episode.create(req.body.url, (err, data) => {
    //         if (err)
    //             res.status(500).send({
    //                 message:
    //                     err.message || "Some error occurred while creating Episodes."
    //             });
    //         else res.send(data);
    //     });
    // } else {
    //     res.status(400).send({
    //         message:  "Some error occurred while creating Episodes."
    //     });
    // }
}

/**
 *
 * @param req
 * @param res
 */
exports.removeEpisode = (req, res) => {
    // const id = req.params.id;
    // Episode.remove(id, (err, data) => {
    //     if (err)
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while retrieving Episodes."
    //         });
    //     else res.send(data);
    // });
}

// module.exports = {
//     findAll,
//     findById,
//     createEpisode,
//     removeEpisode
// }

