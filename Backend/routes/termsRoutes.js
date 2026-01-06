const express = require("express");
const Terms = require("../models/Terms");

const router = express.Router();

/* GET – USER */
router.get("/", async (req, res) => {
  const terms = await Terms.find().sort({ createdAt: 1 });
  res.json(terms);
});

/* POST – ADMIN */
router.post("/", async (req, res) => {
  const term = await Terms.create(req.body);
  res.json(term);
});

/* PUT – ADMIN */
router.put("/:id", async (req, res) => {
  const updated = await Terms.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

/* DELETE – ADMIN */
router.delete("/:id", async (req, res) => {
  await Terms.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
