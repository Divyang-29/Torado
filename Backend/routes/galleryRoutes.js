const express = require("express");
const Gallery = require("../models/Gallery");

const router = express.Router();

/* GET ALL IMAGES (USER + ADMIN) */
router.get("/", async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch gallery" });
  }
});

/* ADD IMAGE (ADMIN) */
router.post("/", async (req, res) => {
  try {
    const image = new Gallery(req.body);
    await image.save();
    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ message: "Failed to add image" });
  }
});

/* DELETE IMAGE (ADMIN) */
router.delete("/:id", async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ message: "Image deleted" });
});

module.exports = router;
