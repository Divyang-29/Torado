const express = require("express");
const Issue = require("../models/Issue");

const router = express.Router();

/* GET ALL ISSUES */
router.get("/", async (req, res) => {
  const issues = await Issue.find().sort({ createdAt: -1 });
  res.json(issues);
});

/* CREATE ISSUE */
router.post("/", async (req, res) => {
  const issue = new Issue(req.body);
  await issue.save();
  res.status(201).json(issue);
});

/* UPDATE ISSUE */
router.put("/:id", async (req, res) => {
  const updated = await Issue.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

/* DELETE ISSUE */
router.delete("/:id", async (req, res) => {
  await Issue.findByIdAndDelete(req.params.id);
  res.json({ message: "Issue deleted" });
});

module.exports = router;
