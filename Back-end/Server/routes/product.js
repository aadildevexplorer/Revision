const express = require("express");
const {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} = require("../controller/product.controller");

const router = express.Router();

router.post("/create", createProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/getAllPro", getAllProduct);
router.put("/updatePro/:id", updateProduct);

module.exports = router;
