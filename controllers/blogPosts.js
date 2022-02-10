const BlogPostsService = require('../services/blogPosts');

const create = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { user } = req;
    const newPost = await BlogPostsService.create({ user, title, content });
    return res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
};