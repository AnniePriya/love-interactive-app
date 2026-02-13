require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Answer = require("./models/Answer");
const LoveNote = require("./models/LoveNote");

const app = express();

/* -------------------------------
   MIDDLEWARE
--------------------------------*/
app.use(cors({
  origin: [
    "http://localhost:5173",
    "jeroshchris.vercel.app"
  ],
  credentials: true
}));


app.use(express.json());

/* -------------------------------
   MONGODB CONNECTION
--------------------------------*/
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("💗 MongoDB Connected Successfully"))
  .catch(err => console.error("❌ Mongo Error:", err));


/* -------------------------------
   TEST ROUTE
--------------------------------*/
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working 💗" });
});


/* -------------------------------
   SAVE GAME ANSWERS
--------------------------------*/
app.post("/api/save", async (req, res) => {
  try {
    const { username, round, clickAnswers = [], textAnswers = [] } = req.body;

    console.log("📥 Incoming Game Data:", req.body);

    if (!username || !round) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    const newEntry = new Answer({
      username,
      round,
      clickAnswers,
      textAnswers
    });

    await newEntry.save();

    console.log("✅ Game data saved successfully");
    res.json({ success: true });

  } catch (err) {
    console.error("❌ Error saving game data:", err);
    res.status(500).json({ success: false });
  }
});


/* -------------------------------
   SAVE LOVE NOTE
--------------------------------*/
app.post("/api/save-love-note", async (req, res) => {
  try {
    const { username, message } = req.body;

    console.log("💌 Incoming Love Note:", req.body);

    if (!username || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing username or message"
      });
    }

    const newNote = new LoveNote({
      username,
      message
    });

    await newNote.save();

    console.log("💗 Love note saved successfully");
    res.json({ success: true });

  } catch (err) {
    console.error("❌ Error saving love note:", err);
    res.status(500).json({ success: false });
  }
});


/* -------------------------------
   START SERVER
--------------------------------*/
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
