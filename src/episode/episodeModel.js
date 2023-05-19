const {pool} = require("../config/default");

// constructor
const Episode = function (episode) {
    this.id = episode.id;
    this.url = episode.url;
};

/***
 *
 * @param result
 */
Episode.findAll = (result) => {
    let query = 'SELECT * FROM episodes';
    pool.query(query, (error, res) => {
        if (error) {
            console.log("error: ", error);
            result(null, error);
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
Episode.findById = (id, result) => {
    const query = "SELECT * FROM episodes WHERE id = $1";
    const params = [id]
    pool.query(query, params, (err, res) => {
        if (typeof err !== 'undefined' && err !== null){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.rowCount) {
            console.log("found episodes: ", res[0]);
            result(null, res.rows[0]);
            return;
        }

        // not found Character with the id
        result({kind: "not_found"}, null);
    });
};

/***
 *
 * @param url
 * @param result
 */
Episode.create = (url, result) => {
    let query = 'INSERT INTO episodes (url) VALUES ($1) RETURNING *'
    pool.query(query, [url], (error, res) => {
        if (error) {
            console.log("error: ", error);
            result(error, null);
            return;
        }
        // response.status(201).send(`Episode added with ID: ${results.rows[0].id}`)

        console.log("character: ", res);
        result(null, res);
    });
}

Episode.remove = (id, result) => {
    let query = "DELETE FROM episodes WHERE id = $1"
    pool.query(query, [id], (error, res) => {
        if (error) {
            console.log("error: ", error);
            result(null, error);
            return;
        }

        if (res.affectedRows == 0) {
            // not found character with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted character with id: ", id);
        result(null, res);
    });
}

module.exports = Episode;
