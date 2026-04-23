const express = require("express");
const {
  createBlog,
  deleteBlog,
  getAllBlog,
  updateBlog,
} = require("../Controller/blog");
const router = express.Router();

router.post("/create", createBlog);
router.delete("/delete/:id", deleteBlog);
router.get("/getAllBlogs", getAllBlog);
router.put("/update/:id", updateBlog);

module.exports = router;
