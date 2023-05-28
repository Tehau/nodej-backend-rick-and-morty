const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Episode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(db) {
            // belongsToMany is for the M-M association to query related Characters instances
            this.belongsToMany(db.characters, {
                selfGranted: DataTypes.BOOLEAN,
                through: "character_episode",
                foreignKey: "episode_id",
                timestamps: false
            });

        }
    }

    Episode.init(
        {
            url: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: "episodes",
            timestamps: false
        }
    )
    return Episode;
};
