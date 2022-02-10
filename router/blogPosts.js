const express = require('express');
const blogPostsController = require('../controllers/blogPosts');
const jwtValidation = require('../middlewares/auth/jwtValidation');
const { isTheBodyComplete } = require('../middlewares/blogPosts/isTheBodyComplete');
const verifyCategoryExistence = require('../middlewares/blogPosts/verifyCategoryExistence');

const router = express.Router();

router.post('/',
jwtValidation, isTheBodyComplete, verifyCategoryExistence, blogPostsController.create);

module.exports = router;