require("dotenv").config({
	path: `.env.${process.env.NODE_ENV || "development"}`,
});

const common = {
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	dialect: process.env.DB_DIALECT || "mysql",
	logging: false,
};

module.exports = {
	development: { ...common },
	test: { ...common, database: process.env.DB_NAME_TEST || "test_db" },
	production: { ...common, database: process.env.DB_NAME_PROD || "prod_db" },
};
