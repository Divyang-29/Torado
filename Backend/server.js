const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use(express.json());
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/donate", require("./routes/donationRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/issues", require("./routes/issueRoutes"));
app.use("/api/candidates", require("./routes/candidateRoutes"));
app.use("/api/volunteer", require("./routes/volunteerRoutes"));
app.use("/api/gallery", require("./routes/galleryRoutes"));
app.use("/api/privacy-policy", require("./routes/privacyPolicyRoutes"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected with Database!"))
  .catch((err) => console.error(err.message));

app.get("/", (req, res) => {
  res.send("Proty backend running");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
