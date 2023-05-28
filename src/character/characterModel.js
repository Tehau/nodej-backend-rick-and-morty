const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Character extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(db) {
            // belongsToMany is for the M-M association to query related Episodes instances
            this.belongsToMany(db.episodes, {
                selfGranted: DataTypes.BOOLEAN,
                through: "character_episode",
                foreignKey: "character_id",
                timestamps: false
            });

        }
    }

    Character.init(
        {
            name: {
                type: DataTypes.STRING,
            },
            status: {
                type: DataTypes.STRING,
            },
            species: {
                type: DataTypes.STRING,
            },
            type: {
                type: DataTypes.STRING,
            },
            gender: {
                type: DataTypes.STRING,
            },
            image: {
                type: DataTypes.STRING,
            },
            url: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "characters",
            timestamps: false
        }
    )
    return Character;
};