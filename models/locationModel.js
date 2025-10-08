"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Location extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Location.init(
		{
			lat: {
				type: DataTypes.DECIMAL(9, 6),
				allowNull: false,
				validate: {
					notNull: { msg: "Latitude is required" },
					notEmpty: { msg: "Latitude cannot be empty" },
				},
			},

			lon: {
				type: DataTypes.DECIMAL(9, 6),
				allowNull: false,
				validate: {
					notNull: { msg: "Longitude is required" },
					notEmpty: { msg: "Longitude cannot be empty" },
				},
			},
			name: DataTypes.STRING,
			region: DataTypes.STRING,
			country: DataTypes.STRING,
			tzId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Location",
		}
	);
	return Location;
};
