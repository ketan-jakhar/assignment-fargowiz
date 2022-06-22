require("dotenv").config({ path: "../.env" });

const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const { db } = require("../config/db.config");

// GET /view
exports.getAll = (req, res) => {
	console.log(
		`req.query= ${req.query}...........req.query.length= ${req.query.length}`
	);

	const { searchInput } = req.query;
	const sqlQuery = `SELECT * FROM users WHERE Name LIKE ? OR Email LIKE ?`;

	db.query(
		sqlQuery,
		[searchInput + "%", searchInput + "%"],
		(error, result) => {
			if (error) {
				console.log("******ERROR******");
				console.log(error);
				console.log("*****************");
				return res.json({
					status: "error",
					data: null,
					message: error.message,
					statusCode: res.statusCode,
				});
			} else {
				console.log(`result.length = ${result.length}`);
				if (result.length > 0) {
					return res.json({
						status: "success",
						data: result,
						message: `Found ${result.length} results (search)`,
						statusCode: res.statusCode,
					});
				} else {
					if (!req.query.searchInput) {
						const sqlQuery2 = `SELECT * FROM users`;
						db.query(sqlQuery2, (err, response) => {
							if (err) {
								console.log("******ERROR******");
								console.log(err);
								console.log("*****************");
								return res.json({
									status: "error",
									data: response,
									message: err.message,
									statusCode: res.statusCode,
								});
							} else {
								return res.json({
									status: "success",
									data: response,
									message: `Found ${response.length} results`,
									statusCode: res.statusCode,
								});
							}
						});
					} else {
						try {
							console.log(`req.query.searchInput = ${req.query.searchInput}`);
							console.log(req.query);
							return res.json({
								status: "success",
								data: null,
								message: "No results found",
								statusCode: res.statusCode,
							});
						} catch (error) {
							console.log("******ERROR******");
							console.log(error);
							console.log("*****************");
							return res.json({
								status: "error",
								data: null,
								message: error.message,
								statusCode: res.statusCode,
							});
						}
					}
				}
			}
		}
	);
};

// POST /create
exports.create = (req, res) => {
	const { name, phoneNumber, email } = req.body;
	const uid = uuidv4();
	db.query(
		`INSERT INTO users SET UID = ?, Name = ?, PhoneNumber = ?, Email = ?`,
		[uid, name, Number(phoneNumber), email],
		(err, result) => {
			if (err) {
				console.log("******ERROR******");
				console.log(err);
				console.log("*****************");
				const statusCode = 400;
				return res.status(statusCode).json({
					status: "error",
					data: null,
					message: err.message,
					statusCode,
				});
			} else {
				db.query("SELECT * FROM users WHERE UID = ?", [uid], (err, resp) => {
					if (err) {
						console.log("******ERROR******");
						console.log(err);
						console.log("*****************");
						const statusCode = 400;
						return res.status(statusCode).json({
							status: "error",
							data: null,
							message: err.message,
							statusCode,
						});
					} else {
						const { uid, name, phoneNumber, email } = resp[0];
						const user = { uid, name, phoneNumber, email };
						//jwt sign
						jwt.sign({ user }, process.env.jwt_secret, (err, token) => {
							if (err) {
								console.log("******ERROR******");
								console.log(err);
								console.log("*****************");
								return res.json({
									status: "error",
									data: null,
									message: error.message,
									statusCode: res.statusCode,
								});
							} else {
								return res.json({
									status: "success",
									data: resp,
									message: `User created successfully`,
									statusCode: res.statusCode,
									token,
								});
							}
						});
					}
				});
			}
		}
	);
};
