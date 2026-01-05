const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String, // image URL or Cloudinary URL
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "Admin",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
