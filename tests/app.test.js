const request = require("supertest");
const app = require("../app");

describe("Weather App Server", () => {
	test("GET / should return welcome message", async () => {
		const res = await request(app).get("/");
		expect(res.statusCode).toBe(200);
		expect(res.body.success).toBe(true);
		expect(res.body.message).toBe("Welcome to the Weather App Server");
	});
});
