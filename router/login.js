const express = require('express');
const loginController = require('../controllers/login');
const isEmailEmpty = require('../middlewares/login/isEmailEmpty');
const isPasswordEmpty = require('../middlewares/login/isPasswordEmpty');
const { verifyEmailAndPassword } = require('../middlewares/login/verifyEmailAndPassword');
const isEmailInTheBody = require('../middlewares/user/isEmailInTheBody');
const isPasswordInTheBody = require('../middlewares/user/isPasswordInTheBody');

const router = express.Router();

router.post('/',
  isEmailInTheBody,
  isPasswordInTheBody,
  isEmailEmpty,
  isPasswordEmpty,
  verifyEmailAndPassword,
  loginController.login);

module.exports = router;