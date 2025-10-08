const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const HandleResponse = require("./utils/handleResponse");

const app = express();

// Enable CORS for Client/React App
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: false,
	})
);

app.use(express.json());
app.use("/", routes);

// Error handler
app.use((err, req, res, next) => {
	HandleResponse.error(res, err, err.statusCode || 500);
});

module.exports = app;
