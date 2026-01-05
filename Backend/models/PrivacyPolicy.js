const mongoose = require("mongoose");

const privacyPolicySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true }, // HTML or plain text
  },
  { timestamps: true }
);

module.exports = mongoose.model("PrivacyPolicy", privacyPolicySchema);
