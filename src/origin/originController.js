const db = require("../config/db.config");
const Origin = db.origins;

/***
 *
 * @param req
 * @param res
 */
exports.findAll = (req, res) => {
    Origin.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Origins."
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

    Origin.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving Origin with id=" + id
            });
        });
};

/***
 *
 * @param req
 * @param res
 */
exports.createOrigin = (req, res) => {
    if (!req.body.url) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Origin
    const Origin = {
        url: req.body.url
    };

    // Save Origin in the database
    Origin.create(Origin)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    "Some error occurred while creating the Origin." || err.message
            });
        });

}

/**
 *
 * @param req
 * @param res
 */
exports.removeOrigin = (req, res) => {
    const id = req.params.id;

    Origin.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Origin was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Origin with id=${id}. Maybe Origin was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Origin with id=" + id || err.message
            });
        });
}
