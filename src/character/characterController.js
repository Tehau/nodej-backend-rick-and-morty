const db = require("../config/db.config");
const Character = db.characters;
const Episode = db.episodes;
const Location = db.locations;
const Origin = db.origins;

/**
 *
 * @param req
 * @param res
 */
exports.findAll = (req, res) => {
    Character.findAll({
        include: [{
            model: Episode,
            through: { attributes: [] },
            attributes: ['url']
        }, {
            model: Location,
            attributes: ['name', 'url']
        }, {
            model: Origin,
            attributes: ['name', 'url']
        }]
    }).then(data => {
        res.status(200).send(data);
    })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while retrieving characters." || err.message
            });
        });
};

/**
 *
 * @param req
 * @param res
 */
exports.findById = (req, res) => {
    const id = req.params.id;

    Character.findByPk(id, {
        include: [{
            model: Episode,
            as: 'episodes',
            through: { attributes: [] },
            attributes: ['id', 'url']
        }]
    })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Character with id=" + id || err.message
            });
        });
};

/**
 *
 * @param req
 * @param res
 */
exports.createCharacter = (req, res) => {
    if (!req.body.url) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Character
    const character = {
        name: req.body.name
    };

    // Save Character in the database
    Character.create(character)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    "Some error occurred while creating the Character." || err.message
            });
        });

}

/**
 *
 * @param req
 * @param res
 */
exports.addEpisodeOnCharacter = async (req, res) => {
    const id = req.params.id;
    const episodes = req.query.episodes;
    try {
        let character = await Character.findByPk(id)
        let episode_id = episodes.split(",")
        for (let i of episode_id) {
            console.log("episodes Params: ", episode_id[i]);
            let episode = await Episode.findByPk(parseInt(episode_id[i]));

            //populate character_episode join table
            await character.addEpisode(episode);
        }

        let characterEpisode = await Character.findByPk(id, {
            include: [{
                model: Episode,
                as: 'episodes',
                attributes: ['id', 'url']
            }]
        })

        res.status(201).send(characterEpisode);
    } catch (error) {
        console.error("Group creation server error: ", error);
        res.status(500).send(error)
    }
}
