const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

/* ➕ ADD BLOG (Admin) */
router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* 📥 GET ALL BLOGS (Public) */
router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

/* ✏️ UPDATE BLOG (Admin) */
router.put("/:id", async (req, res) => {
  const updated = await Blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

/* ❌ DELETE BLOG (Admin) */
router.delete("/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
});

module.exports = router;
