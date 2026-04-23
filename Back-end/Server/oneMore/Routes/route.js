const express = require("express");
const {
  createProduct,
} = require("../../oneMore/Controller/product.Controller");

const router = express.Router();

router.post("/create", createProduct);

module.exports = router;
