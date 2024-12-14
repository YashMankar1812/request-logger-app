const express = require('express');
const router = express.Router();

// Example GET route
router.get('/api/jobs', (req, res) => {
  res.status(201).send('Welcome to the API');
});

// Example POST route
router.post('/create', (req, res) => {
  res.status(201).send('Job created');
});

module.exports = router;
