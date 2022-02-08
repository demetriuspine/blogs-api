const express = require('express');
const userController = require('../controllers/user');
const jwtValidation = require('../middlewares/auth/jwtValidation');
const isEmailInTheBody = require('../middlewares/user/isEmailInTheBody');
const isEmailUnique = require('../middlewares/user/isEmailUnique');
const isEmailValid = require('../middlewares/user/isEmailValid');
const isNameInTheBody = require('../middlewares/user/isNameInTheBody');
const isNameSizeValid = require('../middlewares/user/isNameSizeValid');
const isPasswordInTheBody = require('../middlewares/user/isPasswordInTheBody');
const isPasswordValid = require('../middlewares/user/isPasswordValid');

const router = express.Router();

router.post('/',
  isNameInTheBody,
  isNameSizeValid, 
  isEmailInTheBody, 
  isEmailValid, 
  isPasswordInTheBody, 
  isPasswordValid, 
  isEmailUnique,
  userController.create);

router.get('/', jwtValidation, userController.getAll);

module.exports = router;