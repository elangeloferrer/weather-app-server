const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const HandleResponse = require("./utils/handleResponse");

// Enable CORS for React App
app.use(
	cors({
		origin: process.env.CLIENT_URL, // frontend URL CLIENT_URL
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: false, // true if using cookies or auth headers
	})
);

app.use(express.json());

app.use("/", routes);

app.use((err, req, res, next) => {
	HandleResponse.error(res, err, err.statusCode || 500);
});
