const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  name: String,
  difficulty: String // 'easy', 'medium', 'hard'
});

module.exports = mongoose.model('Topic', topicSchema);