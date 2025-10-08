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
		const newLocation = await locationService.create(req.body);
		HandleResponse.success(
			res,
			newLocation,
			"Locations created successfully",
			201
		);
	});

	update = handleAsync(async (req, res) => {
		const updated = await locationService.update(req.params.id, req.body);
		HandleResponse.success(res, updated, "Locations updated successfully");
	});

	delete = handleAsync(async (req, res) => {
		await locationService.delete(req.params.id);
		HandleResponse.success(res, null, "Locations deleted successfully", 204);
	});
}

module.exports = new LocationController();
