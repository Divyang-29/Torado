const Volunteer = require("../models/Volunteer");

/* CREATE VOLUNTEER */
exports.createVolunteer = async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();

    res.status(201).json({
      message: "Volunteer form submitted successfully",
    });
  } catch (error) {
    console.error("VOLUNTEER ERROR:", error);
    res.status(500).json({ message: "Failed to submit volunteer form" });
  }
};
