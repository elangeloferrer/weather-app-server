const request = require("supertest");
const app = require("../app");
const locationService = require("../services/locationService");

// Mock the repository methods used by the service
jest.mock("../repositories/locationRepository", () => ({
	findOne: jest.fn(),
	create: jest.fn(),
}));

const locationRepository = require("../repositories/locationRepository");

describe("POST /locations", () => {
	const mockLocation = {
		lat: 14.5995,
		lon: 120.9842,
		name: "Manila",
		region: "Metro Manila",
		country: "Philippines",
		tzId: "Asia/Manila",
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("should create a new location successfully", async () => {
		// Simulate no existing location
		locationRepository.findOne.mockResolvedValue(null);
		locationRepository.create.mockResolvedValue(mockLocation);

		const res = await request(app)
			.post("/locations")
			.send(mockLocation)
			.expect(201);

		// Check repository calls
		expect(locationRepository.findOne).toHaveBeenCalledWith({
			lat: parseFloat(mockLocation.lat.toFixed(6)),
			lon: parseFloat(mockLocation.lon.toFixed(6)),
		});
		expect(locationRepository.create).toHaveBeenCalledWith({
			lat: parseFloat(mockLocation.lat.toFixed(6)),
			lon: parseFloat(mockLocation.lon.toFixed(6)),
			name: mockLocation.name,
			region: mockLocation.region,
			country: mockLocation.country,
			tzId: mockLocation.tzId,
		});

		// Check response
		expect(res.body.success).toBe(true);
		expect(res.body.message).toMatch(/created/i);
		expect(res.body.data).toEqual(mockLocation);
	});

	it("should return message if location already exists", async () => {
		// Simulate existing location
		locationRepository.findOne.mockResolvedValue(mockLocation);

		const res = await request(app)
			.post("/locations")
			.send(mockLocation)
			.expect(200);

		expect(res.body.success).toBe(true);
		expect(res.body.message).toMatch(/already saved/i);
		expect(res.body.data).toEqual(mockLocation);
		expect(locationRepository.create).not.toHaveBeenCalled();
	});
});
