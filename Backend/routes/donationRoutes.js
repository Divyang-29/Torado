const express = require("express");
const Donation = require("../models/Donation"); // ✅ MISSING IMPORT
const { createDonation } = require("../controllers/donationController");

const router = express.Router();

/* CREATE DONATION (already working) */
router.post("/", createDonation);

/* GET ALL DONATIONS (ADMIN PANEL) */
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (err) {
    console.error("FETCH DONATIONS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch donations" });
  }
});

module.exports = router;
