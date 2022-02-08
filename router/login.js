const express = require('express');
const loginController = require('../controllers/login');
const { verifyEmailAndPassword } = require('../middlewares/login/verifyEmailAndPassword');

const router = express.Router();

router.post('/', verifyEmailAndPassword, loginController.login);

module.exports = router;