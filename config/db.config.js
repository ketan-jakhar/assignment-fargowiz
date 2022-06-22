const mysql = require("mysql2");

exports.db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "fargowiz",
	multipleStatements: true,
});

exports.db.connect((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log("DB connected successfully.");
	}
});
