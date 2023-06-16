const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Origin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(db) {
            // belongsToMany is for the M-M association to query related Characters instances
            this.hasMany(db.characters, {
                as: "origin",
                foreignKey: "origin_id",
                timestamps: false
            });

        }
    }

    Origin.init(
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
            modelName: "origins",
            timestamps: false
        }
    )
    return Origin;
};
