const express = require("express");
const Volunteer = require("../models/Volunteer");
const { createVolunteer } = require("../controllers/volunteerController");

const router = express.Router();

/* USER SUBMIT */
router.post("/", createVolunteer);

/* ADMIN FETCH */
router.get("/", async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch volunteers" });
  }
});

module.exports = router;
