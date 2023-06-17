const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(db) {
            // hasMany is for the N-M association to query related Characters instances
            this.hasMany(db.characters, {
                as: "residents",
                foreignKey: "location_id",
                timestamps: false
            });
            this.hasMany(db.characters, {
                as: "origin",
                foreignKey: "origin_id",
                timestamps: false
            });

        }
    }

    Location.init(
        {
            name: {
                type: DataTypes.STRING
            },
            url: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: "locations",
            timestamps: false
        }
    )
    return Location;
};
