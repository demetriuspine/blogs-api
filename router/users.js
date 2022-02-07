const express = require('express');
const userController = require('../controllers/user');
const isEmailInTheBody = require('../middlewares/user/isEmailInTheBody');
const isEmailUnique = require('../middlewares/user/isEmailUnique');
const isEmailValid = require('../middlewares/user/isEmailValid');
const isNameSizeValid = require('../middlewares/user/isNameSizeValid');
const isPasswordInTheBody = require('../middlewares/user/isPasswordInTheBody');
const isPasswordValid = require('../middlewares/user/isPasswordValid');

const router = express.Router();

router.post('/',
  isNameSizeValid, 
  isEmailInTheBody, 
  isEmailValid, 
  isPasswordInTheBody, 
  isPasswordValid, 
  isEmailUnique,
  userController.create);

module.exports = router;