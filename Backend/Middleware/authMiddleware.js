//authMiddleware
const express = require('express');
const router = express.Router();
const authMiddleware = require('./authMiddleware'); // Import middleware

// Example route that requires authentication
router.get('/user', authMiddleware.verifyJWT, (req, res) => {
  // Access user data from request object (req.user)
  const userData = req.user;
  res.json({ message: 'Authenticated user', user: userData });
});

module.exports = router;