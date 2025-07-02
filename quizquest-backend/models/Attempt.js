const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema({
  userId: String,
  topicId: String,
  answers: [Number],
  score: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Attempt', attemptSchema);