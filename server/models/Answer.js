
const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  username: String,
  round: Number,
  clickAnswers: [String],
  textAnswers: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Answer", answerSchema);
