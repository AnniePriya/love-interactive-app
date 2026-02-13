const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  round: {
    type: String,   // 🔥 CHANGED FROM Number TO String
    required: true
  },

  clickAnswers: {
    type: [String],
    default: []
  },

  textAnswers: {
    type: [String],
    default: []
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Answer", answerSchema);
