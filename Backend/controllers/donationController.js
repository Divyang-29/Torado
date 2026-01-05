const Donation = require("../models/Donation");

exports.createDonation = async (req, res) => {
  try {
    const {
      amount,
      firstName,
      lastName,
      email,
      phone,
      address1,
      address2,
      paymentMethod,
    } = req.body;

    if (
      !amount ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !paymentMethod
    ) {
      return res.status(400).json({
        message: "All required fields missing",
      });
    }

    const donation = await Donation.create({
      amount,
      firstName,
      lastName,
      email,
      phone,
      address1,
      address2,
      paymentMethod,
    });

    res.status(201).json({
      message: "Donation successful",
      donation,
    });
  } catch (error) {
    console.error("DONATION ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

