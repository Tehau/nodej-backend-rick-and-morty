const Character = require("./characterModel");

const findAll = (req, res) => {
  Character.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving Characters."
      });
    else res.send(data);
  });
};

const findById = (req, res) => {
  const id = req.params.id;
  Character.findById(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving Characters."
      });
    else res.send(data);
  });
};

module.exports = {
  findAll,
  findById
}

