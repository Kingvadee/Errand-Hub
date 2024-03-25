/*
Initialize express router and require bcrypt
for password hashing in the auth.js file.
*/
const express = require('express');
const bcrypt = require('bcrypt'); // bcrypt for password hashing
const jwt = require('jsonwebtoken'); // JWT for token generation

const router = express.Router();

// User model with password field
const User = require('./models/User');

// Signup route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.json({ message: 'User created successfully!', token }); // Send token in response
  } catch (err) {
    res.status(400).json({ message: 'Error creating user' });
  }
});

// Signin route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare hashed password with provided password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token upon successful login
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // Login successful (implementation depends on your app)
    res.json({ message: 'Login successful!', token }); // Send token in response
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Logout route (implementation depends on your app)
router.get('/logout', (req, res) => {
  // Invalidate session or token
  res.json({ message: 'Logged out successfully!' });
});

module.exports = router;
