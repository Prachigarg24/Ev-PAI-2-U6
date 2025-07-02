const express = require('express');
const router = express.Router();
const Attempt = require('../models/Attempt');

router.post('/', async (req, res) => {
  const { userId, topicId, answers, score } = req.body;
  const newAttempt = new Attempt({ userId, topicId, answers, score });
  await newAttempt.save();
  res.json(newAttempt);
});

router.get('/:userId', async (req, res) => {
  const attempts = await Attempt.find({ userId: req.params.userId });
  res.json(attempts);
});

module.exports = router;