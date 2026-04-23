const expressAsyncHandler = require("express-async-handler");
const Product = require("../model/productModel");

// create product
const createProduct = expressAsyncHandler(async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price || !inStock) {
    throw new Error("All fields are required");
  }
  const product = new Product(req.body);
  await product.save();

  if (!product) {
    res.status(500);
    throw new Error("Product Not Created");
  } else {
    res.status(201).json({
      success: true,
      product: product,
    });
  }
});

// delete product
const deleteProduct = expressAsyncHandler(async (req, res) => {
  const products = await Product.findByIdAndDelete(req.params.id);
  if (!products) {
    res.status(404).json({ message: "Product Deleted" });
  }
  // else {
  //   res.status(200).json({
  //     success: true,
  //     product: products,
  //   });
  // }
});
// get all product
const getAllProduct = expressAsyncHandler(async (req, res) => {
  const allProducts = await Product.find();
  if (!allProducts) {
    res.status(404).json({ message: "Products Not Found!" });
  } else {
    res.status(201).json({
      success: true,
      product: allProducts,
    });
  }
});

// update product
const updateProduct = expressAsyncHandler(async (req, res) => {
  const updatePro = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updatePro) {
    res.status(404).json({ message: "Products Not Edit!" });
  } else {
    res.status(200).json({
      success: true,
      product: updatePro,
    });
  }
});

module.exports = { createProduct, deleteProduct, getAllProduct, updateProduct };
