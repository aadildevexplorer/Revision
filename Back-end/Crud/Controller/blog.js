const Blog = require("../model/blog");

const createBlog = async (req, res) => {
  const { title, body, description } = req.body;
  if (!title || !body || !description) {
    throw new Error("All fields are required");
  }

  const blog = new Blog(req.body);
  await blog.save();

  if (!blog) {
    res.status(500);
    throw new Error("Blog Not Created");
  } else {
    res.status(201).json({ success: true, blog: blog });
  }
};

const deleteBlog = async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) {
    res.status(404).json({ msg: "Blog deleted" });
  }
};

const getAllBlog = async (req, res) => {
  const all_blog = await Blog.find();

  if (!all_blog) {
    res.status(500);
    throw new Error("Blog Not Found");
  } else {
    res.status(201).json({ success: true, blog: all_blog });
  }
};

const updateBlog = async (req, res) => {
  const update_blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!update_blog) {
    res.status(404).json({ msg: "Blog not updated" });
  } else {
    res.status(200).json({
      blog: update_blog,
      success: true,
    });
  }
};

module.exports = { createBlog, deleteBlog, getAllBlog, updateBlog };
