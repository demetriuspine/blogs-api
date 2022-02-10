const express = require('express');
const blogPostsController = require('../controllers/blogPosts');
const jwtValidation = require('../middlewares/auth/jwtValidation');

const router = express.Router();

router.post('/', jwtValidation, blogPostsController.create);

module.exports = router;