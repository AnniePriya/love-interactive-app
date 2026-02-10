require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Answer = require("./models/Answer");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("💗 MongoDB Connected Successfully"))
  .catch(err => console.log("Mongo Error:", err));

// Save answers route
app.post("/api/save", async (req, res) => {
  console.log("Incoming data:", req.body);

  const { username, round, clickAnswers, textAnswers } = req.body;

  try {
    const newEntry = new Answer({
      username,
      round,
      clickAnswers,
      textAnswers
    });

    await newEntry.save();

    console.log("✅ Saved to MongoDB");
    res.json({ success: true });
  } catch (err) {
    console.log("❌ Error saving:", err);
    res.status(500).json({ success: false });
  }
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working 💗" });
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
