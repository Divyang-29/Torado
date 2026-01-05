const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // ✅ Validation
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        message: "All required fields missing",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({
      message: "Contact submitted successfully",
      contact,
    });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
