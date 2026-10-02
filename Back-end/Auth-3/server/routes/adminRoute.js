const express = require("express");
const { registerUser, loginUser } = require("../controller/user.controller");
const getAllUser = require("../controller/admin.controller");
const adminProtect = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/getUsers", adminProtect , getAllUser);

module.exports = router;
