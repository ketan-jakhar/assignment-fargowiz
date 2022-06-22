require("dotenv").config({ path: "../.env" });

const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
	const bearerHeader = req.headers["authorization"];
	console.log(typeof bearerHeader);

	if (typeof bearerHeader == undefined) {
		console.log("******ERROR******");
		console.log(error);
		console.log("*****************");
		const statusCode = 403; // Forbidden
		return res.status(statusCode).json({
			status: "error",
			data: null,
			message: "none",
			statusCode,
		});
	} else {
		try {
			const bearer = bearerHeader.split(" ");
			const bearerToken = bearer[1];
			req.token = bearerToken;
			jwt.verify(req.token, process.env.jwt_secret, (err, authData) => {
				if (err) {
					console.log("******ERROR******");
					console.log(error);
					console.log("*****************");
					const statusCode = 403; // Forbidden
					return res.status(statusCode).json({
						status: "error",
						data: null,
						message: err.message,
						statusCode,
					});
				} else {
					next();
				}
			});
		} catch (error) {
			console.log("******ERROR******");
			console.log(error);
			console.log("*****************");
			const statusCode = 403; // Forbidden
			error.message === "Cannot read properties of undefined (reading 'split')"
				? (message = "Use Bearer token authorization")
				: (message = error.message);
			return res.status(statusCode).json({
				status: "error",
				data: null,
				message,
				statusCode,
			});
		}

		// } else {
		// 	console.log("******ERROR******");
		// 	console.log(error);
		// 	console.log("*****************");
		// 	const statusCode = 403; // Forbidden
		// 	return res.status(statusCode).json({
		// 		status: "error",
		// 		data: null,
		// 		message: error.message,
		// 		statusCode,
		// 	});
	}
};

// exports.authorization = (req, res, next) => {
// 	jwt.verify(tkn, process.env.jwt_secret, (err, authData) => {
// 		if (err) {
// 			console.log("******ERROR******");
// 			console.log(error);
// 			console.log("*****************");
// 			const statusCode = 403; // Forbidden
// 			return res.status(statusCode).json({
// 				status: "error",
// 				data: null,
// 				message: error.message,
// 				statusCode,
// 			});
// 		} else {
// 			next();
// 		}
// 	});
// };
