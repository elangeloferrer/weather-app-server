"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Locations", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			lat: {
				allowNull: false,
				type: Sequelize.DECIMAL(9, 6),
			},
			lon: {
				allowNull: false,
				type: Sequelize.DECIMAL(9, 6),
			},
			name: {
				type: Sequelize.STRING,
			},
			region: {
				type: Sequelize.STRING,
			},
			country: {
				type: Sequelize.STRING,
			},
			tzId: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Locations");
	},
};
