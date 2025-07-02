const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  topicId: String,
  question: String,
  options: [String],
  correctIndex: Number
});

module.exports = mongoose.model('Question', questionSchema);