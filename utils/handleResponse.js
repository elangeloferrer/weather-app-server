class HandleResponse {
	static success(res, data = {}, message = "Success", statusCode = 200) {
		return res.status(statusCode).json({
			success: true,
			message,
			data,
		});
	}

	static error(res, error, statusCode = 500) {
		const message =
			error.message || "Something went wrong, please try again later.";

		// Log technical error details for developers
		console.error("Error Details: ", error);

		// Send readable response to user
		return res.status(statusCode).json({
			success: false,
			message,
			// Optionally include stack trace in development mode only
			...(process.env.NODE_ENV === "development" && { stack: error.stack }),
		});
	}
}

module.exports = HandleResponse;
