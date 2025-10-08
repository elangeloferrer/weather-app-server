const repository = require("../repositories/locationRepository");

class LocationService {
	async getAllLocations() {
		const locations = await repository.findAll();
		if (!locations) throw new AppError("Failed to fetch locations", 500);
		return locations;
	}

	async getLocationById(id) {
		const location = await repository.findById(id);
		if (!location) throw new Error("Location not found");
		return location;
	}

	async createLocation(data) {
		// Optional: add validation or external API call logic here

		console.info("heyy data", data.lat, data.lon);
		// const location = await repository.create(data);
		// if (!location) throw new AppError("Failed to create location", 500);
		// return location;
	}

	async updateLocation(id, data) {
		const updated = await repository.update(id, data);
		if (!updated) throw new Error("Location not found");
		return updated;
	}

	async deleteLocation(id) {
		const deleted = await repository.delete(id);
		if (!deleted) throw new Error("Location not found");
		return true;
	}
}

module.exports = new LocationService();
