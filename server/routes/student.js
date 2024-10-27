const express = require('express');
const studentAuthController = require('../controller/Student/studentAuthController');
const router = express.Router();

router.post('/register',studentAuthController.register);

module.exports = router;