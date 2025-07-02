const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { email, role } = req.body;

  const users = [
    { name: 'Prachi', email: 'prachi@student.com', role: 'student' },
    { name: 'Admin', email: 'admin@quiz.com', role: 'admin' }
  ];

  const foundUser = users.find(u => u.email === email && u.role === role);

  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(401).json({ message: 'Invalid login' });
  }
});

module.exports = router;