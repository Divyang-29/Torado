const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default:
        "Fummy text of the printing and type setting industry standard known printing and type news dol.",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Issue", issueSchema);
