const { Location } = require("../models");

class LocationRepository {
	async findAll() {
		return await Location.findAll();
	}

	async findById(id) {
		return await Location.findByPk(id);
	}

	async create(data) {
		return await Location.create(data);
	}

	async update(id, data) {
		const location = await Location.findByPk(id);
		if (!location) return null;
		return await location.update(data);
	}

	async delete(id) {
		const location = await Location.findByPk(id);
		if (!location) return null;
		await location.destroy();
		return true;
	}
}

module.exports = new LocationRepository();
