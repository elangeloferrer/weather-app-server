const express = require("express");
const router = express.Router();

const locationRoutes = require("./locationRoutes");

// A Welcome Route
router.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		message: "Welcome to the Weather App Server",
	});
});

router.use("/locations", locationRoutes);

module.exports = router;
