const express = require("express");
const Contact = require("../models/Contact");
const { createContact } = require("../controllers/contactController");

const router = express.Router();

/* USER SUBMIT */
router.post("/", createContact);

/* ADMIN FETCH */
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error("FETCH CONTACTS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch contacts" });
  }
});

module.exports = router;
