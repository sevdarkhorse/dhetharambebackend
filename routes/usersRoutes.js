// routes/index.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

router.post('/users', userController.createUser);

module.exports = router;
