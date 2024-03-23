//auth.js is the file that contains the routes for the user authentication. It has the following routes:
const express = require('express');
const router = express.Router();
const { signup, signin, logout } = require('../controllers/authController');

// Signup route
router.post('/signup', signup);

// Signin route
router.post('/signin', signin);

// Logout route
router.get('/logout', logout);

module.exports = router;
