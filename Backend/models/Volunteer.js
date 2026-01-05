const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address1: String,
    address2: String,
    about: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Volunteer", volunteerSchema);
