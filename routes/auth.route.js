const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.patch('/updateMyPassword', authController.protect, authController.updatePassword);

module.exports = router;