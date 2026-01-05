const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    socials: {
      linkedin: String,
      twitter: String,
      facebook: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Candidate", candidateSchema);
