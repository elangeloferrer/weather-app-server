const AppError = require("../utils/AppError");

class BaseService {
	constructor(repository, entityName = "Record") {
		this.repository = repository;
		this.entityName = entityName;
	}

	async getAll(filters = {}) {
		return await this.repository.findAll({ where: filters });
	}

	async getById(id) {
		const data = await this.repository.findById(id);
		if (!data) throw new AppError(`${this.entityName} not found`, 404);
		return data;
	}

	async create(data) {
		return await this.repository.create(data);
	}

	async getPaginated(page = 1, limit = 10, filters = {}) {
		return await this.repository.findPaginated({ page, limit, where: filters });
	}
}

module.exports = BaseService;
