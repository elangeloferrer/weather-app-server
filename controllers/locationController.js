const handleAsync = require("../utils/handleAsync");
const locationService = require("../services/locationService");
const HandleResponse = require("../utils/handleResponse");

class LocationController {
	getAll = handleAsync(async (req, res) => {
		const locations = await locationService.getAll();
		HandleResponse.success(res, locations, "Locations fetched successfully");
	});

	getById = handleAsync(async (req, res) => {
		const location = await locationService.getById(req.params.id);
		HandleResponse.success(res, locations, "Location fetched successfully");
	});

	create = handleAsync(async (req, res) => {
		const result = await locationService.create(req.body);
		HandleResponse.success(res, result.data, result.message, result.statusCode);
	});
}

module.exports = new LocationController();
