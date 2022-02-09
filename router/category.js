const express = require('express');
const categoryController = require('../controllers/category');
const jwtValidation = require('../middlewares/auth/jwtValidation');
const { isNameInTheBody } = require('../middlewares/category/isNameInTheBody');

const router = express.Router();

router.post('/', isNameInTheBody, jwtValidation, categoryController.create);

module.exports = router;