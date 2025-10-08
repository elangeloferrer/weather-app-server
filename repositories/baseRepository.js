const { Op } = require("sequelize");

class BaseRepository {
	constructor(model) {
		this.model = model;
	}

	async findAll(options = {}) {
		const {
			where = {},
			attributes = null,
			order = [["createdAt", "DESC"]],
			limit = null,
			offset = null,
			include = [],
		} = options;

		return await this.model.findAll({
			where,
			attributes,
			order,
			limit,
			offset,
			include,
		});
	}

	async findById(id) {
		return await this.model.findByPk(id);
	}

	async findOne(where = {}) {
		return await this.model.findOne({ where });
	}

	async create(data) {
		return await this.model.create(data);
	}

	async findPaginated({
		page = 1,
		limit = 10,
		where = {},
		order = [["id", "ASC"]],
	}) {
		const offset = (page - 1) * limit;
		const { count, rows } = await this.model.findAndCountAll({
			where,
			order,
			limit,
			offset,
		});

		return {
			data: rows,
			pagination: {
				total: count,
				currentPage: page,
				totalPages: Math.ceil(count / limit),
				hasNextPage: offset + rows.length < count,
				hasPrevPage: page > 1,
			},
		};
	}
}

module.exports = BaseRepository;
