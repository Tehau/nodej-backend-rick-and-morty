const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(db) {
            // belongsToMany is for the M-M association to query related Characters instances
            this.hasMany(db.characters, {
                as: "location",
                foreignKey: "location_id",
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
