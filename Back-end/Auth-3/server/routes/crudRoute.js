const express = require("express");
const { createUser, deleteUser, updateUser } = require("../controller/crud.controller");

const router = express.Router();

router.post("/create", createUser);
router.delete("/delete/:id", deleteUser);
router.put("/updatePro/:id", updateUser);

module.exports = router;
