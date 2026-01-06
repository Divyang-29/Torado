const express = require("express");
const Testimonial = require("../models/Testimonial");

const router = express.Router();

/* GET – USER */
router.get("/", async (req, res) => {
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  res.json(testimonials);
});

/* POST – ADMIN */
router.post("/", async (req, res) => {
  const testimonial = new Testimonial(req.body);
  await testimonial.save();
  res.status(201).json(testimonial);
});

/* DELETE – ADMIN */
router.delete("/:id", async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
