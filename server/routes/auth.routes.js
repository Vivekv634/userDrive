const express = require('express');
const authControllers = require('../controllers/auth.controllers');

const router = express.Router();

router.post('/register', authControllers.registerUser);
router.post('/login', authControllers.loginUser);

module.exports = router;