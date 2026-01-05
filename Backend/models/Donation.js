const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address1: String,
    address2: String,
    paymentMethod: {
      type: String,
      enum: ["cash", "card", "paypal"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donation", donationSchema);
