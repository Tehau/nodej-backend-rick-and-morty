// noinspection JSValidateTypes

const dbConfig = require("../config/default");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    });

const db = {};

db.sequelize = sequelize;
db.episodes = require("../episode/episodeModel")(sequelize, Sequelize);
db.characters = require("../character/characterModel")(sequelize, Sequelize);
db.locations = require("../location/locationModel")(sequelize, Sequelize);
// db.origins = require("../origin/originModel")(sequelize, Sequelize);
db.characters.associate(db)
db.episodes.associate(db)
db.locations.associate(db)
// db.origins.associate(db)

// hasOne association
// TODO Finish One to Many association
// db.characters.hasOne(db.locations)
// db.characters.hasOne(db.origins)

module.exports = db;
