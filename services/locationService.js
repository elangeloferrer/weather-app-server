const BaseService = require("./baseService");
const locationRepository = require("../repositories/locationRepository");

class LocationService extends BaseService {
	constructor() {
		super(locationRepository, "Location");
	}

	// Override the create method from BaseService
	async create(data) {
		const { lat, lon, name, region, country, tzId } = data;

		// Validation
		if (!lat || !lon) {
			throw new AppError("Latitude and Longitude are required", 400);
		}

		// Parse into Float
		const parsedLat = parseFloat(parseFloat(lat).toFixed(6));
		const parsedLon = parseFloat(parseFloat(lon).toFixed(6));

		// Check for duplicates
		const existing = await this.repository.findOne({
			lat: parsedLat,
			lon: parsedLon,
		});

		if (existing) {
			return {
				message: "Location with the same coordinates is already saved",
				data: existing,
				statusCode: 200,
			};
		}

		// Proceed to create
		const newLocation = await this.repository.create({
			lat: parsedLat,
			lon: parsedLon,
			name,
			region,
			country,
			tzId,
		});

		return {
			message: "Locations created successfully",
			data: newLocation,
			statusCode: 201,
		};
	}
}

module.exports = new LocationService();
