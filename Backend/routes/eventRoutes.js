const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

/* ✅ GET ALL EVENTS */
router.get("/", async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.json(events);
});

/* ➕ CREATE EVENT */
router.post("/", async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.status(201).json(event);
});

/* ✏️ UPDATE EVENT */
router.put("/:id", async (req, res) => {
  const updated = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

/* ❌ DELETE EVENT */
router.delete("/:id", async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Event deleted" });
});

// GET SINGLE EVENT BY ID
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch event" });
  }
});

module.exports = router;
