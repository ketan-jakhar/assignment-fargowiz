const compression = require("compression");
const morgan = require("morgan");
const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;

// defining routes
const routes = require("./routes/user");

//dotenv config
dotenv.config({ path: "./.env" });

require("./config/db.config.js");

const app = express();

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Parse application/json
app.use(express.json());

// Parsing middlewares
// morgan logger middleware
app.use(morgan("dev"));

// gzip compression for optimization
app.use(compression());

// Routes
app.use("/", routes);

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
