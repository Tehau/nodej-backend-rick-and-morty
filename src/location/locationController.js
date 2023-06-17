const db = require("../config/db.config");
const Location = db.locations;
const Character = db.characters;

/***
 *
 * @param req
 * @param res
 */
exports.findAll = (req, res) => {
    Location.findAll({
        include: [{
            model: Character,
            attributes: ['id', 'name']
        }]})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Locations."
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

    Location.findByPk(id)
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
exports.createLocation = (req, res) => {
    if (!req.body.url) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Location
    const location = {
        url: req.body.url
    };

    // Save Location in the database
    Location.create(location)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    "Some error occurred while creating the Location." || err.message
            });
        });

}

/**
 *
 * @param req
 * @param res
 */
exports.removeLocation = (req, res) => {
    const id = req.params.id;

    Location.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Location was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Location with id=${id}. Maybe Location was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Location with id=" + id || err.message
            });
        });
}
