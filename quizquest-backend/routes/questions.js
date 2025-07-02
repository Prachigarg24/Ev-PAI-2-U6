const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/:topicId', async (req, res) => {
  const questions = await Question.find({ topicId: req.params.topicId });
  res.json(questions);
});

router.post('/', async (req, res) => {
  const { topicId, question, options, correctIndex } = req.body;
  const newQuestion = new Question({ topicId, question, options, correctIndex });
  await newQuestion.save();
  res.json(newQuestion);
});

module.exports = router;