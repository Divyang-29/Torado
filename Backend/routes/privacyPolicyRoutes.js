const express = require("express");
const PrivacyPolicy = require("../models/PrivacyPolicy");

const router = express.Router();

/* GET POLICY (USER) */
router.get("/", async (req, res) => {
  const policy = await PrivacyPolicy.findOne().sort({ createdAt: -1 });
  res.json(policy);
});

/* CREATE / UPDATE POLICY (ADMIN) */
router.post("/", async (req, res) => {
  const { title, content } = req.body;

  const existing = await PrivacyPolicy.findOne();

  if (existing) {
    existing.title = title;
    existing.content = content;
    await existing.save();
    return res.json(existing);
  }

  const policy = new PrivacyPolicy({ title, content });
  await policy.save();
  res.status(201).json(policy);
});

module.exports = router;
