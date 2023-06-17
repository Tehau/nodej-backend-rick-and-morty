const db = require("../config/db.config");
const Episode = db.episodes;
const Character = db.characters;

/***
 *
 * @param req
 * @param res
 */
exports.findAll = (req, res) => {
    Episode.findAll({
        include: [{
            model: Character,
            through: { attributes: [] },
            attributes: ['name']
        }]})
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
 * @param req
 * @param res
 */
exports.findById = (req, res) => {
    const id = req.params.id;

    Episode.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving Tutorial with id=" + id
            });
        });
};

/***
 *
 * @param req
 * @param res
 */
exports.createEpisode = (req, res) => {
    if (!req.body.url) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Episode
    const episode = {
        url: req.body.url
    };

    // Save Episode in the database
    Episode.create(episode)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    "Some error occurred while creating the Episode." || err.message
            });
        });

}

/**
 *
 * @param req
 * @param res
 */
exports.removeEpisode = (req, res) => {
    const id = req.params.id;

    Episode.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Episode was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Episode with id=${id}. Maybe Episode was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Episode with id=" + id || err.message
            });
        });
}
