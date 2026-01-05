const express = require("express");
const Candidate = require("../models/Candidate");

const router = express.Router();

/* GET ALL */
router.get("/", async (req, res) => {
  const candidates = await Candidate.find().sort({ createdAt: -1 });
  res.json(candidates);
});

/* CREATE */
router.post("/", async (req, res) => {
  const candidate = new Candidate(req.body);
  await candidate.save();
  res.status(201).json(candidate);
});

/* UPDATE */
router.put("/:id", async (req, res) => {
  const updated = await Candidate.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

/* DELETE */
router.delete("/:id", async (req, res) => {
  await Candidate.findByIdAndDelete(req.params.id);
  res.json({ message: "Candidate deleted" });
});

module.exports = router;
