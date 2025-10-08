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
			lat: DataTypes.DECIMAL(9, 6),
			lon: DataTypes.DECIMAL(9, 6),
			name: DataTypes.STRING,
			region: DataTypes.STRING,
			country: DataTypes.STRING,
			tz_id: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Location",
		}
	);
	return Location;
};
