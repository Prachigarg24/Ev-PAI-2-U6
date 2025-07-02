const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');

router.get('/', async (req, res) => {
  const topics = await Topic.find();
  res.json(topics);
});

router.post('/', async (req, res) => {
  const { name, difficulty } = req.body;
  const newTopic = new Topic({ name, difficulty });
  await newTopic.save();
  res.json(newTopic);
});

module.exports = router;