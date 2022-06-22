const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const { verifyToken } = require("../middleware/jwt");

// GET /view
router.get("/view", verifyToken, userController.getAll);

// POST /create
router.post("/create", userController.create);

module.exports = router;
