const {pool} = require("../config/default");

// constructor
const Character = function(character) {
    this.id = character.id;
    this.name = character.name;
    this.status = character.status;
    this.species = character.species;
    this.type = character.type;
    this.gender = character.gender;
    this.origin = character.origin;
    this.location = character.location;
    this.image = character.image;
    this.url = character.url;
    this.created = character.created;
    this.episodes = character.episodes;
};

/***
 *
 * @param result
 */
Character.findAll = (result) => {
    let query = "SELECT * FROM characters";

    pool.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("character: ", res);
        result(null, res);
    });

};

/***
 *
 * @param id
 * @param result
 */
Character.findById = (id, result) => {
    const query = "SELECT * FROM characters WHERE id = $1";
    const params = [id]
    pool.query(query, params, (err, res) => {
        if (typeof err !== 'undefined' && err !== null){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.rowCount) {
            console.log("found characters: ", res[0]);
            result(null, res.rows[0]);
            return;
        }

        // not found Character with the id
        result({ kind: "not_found" }, null);
    });
};

/***
 *
 * @param id
 * @param character
 * @param result
 */
Character.updateById = (id, character, result) => {

    pool.query(
        "UPDATE characters SET name = ?, status = ?, species = ?, type = ?, gender = ? WHERE id = ?",
        [character.name, character.status, character.species, character.type, character.gender, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows === 0) {
                // not found Character with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated character: ", { id: id, ...character });
            result(null, { id: id, ...character });
        }
    );
};

module.exports = Character;

