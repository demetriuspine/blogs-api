const { BlogPosts } = require('../models');

const create = async ({ user, title, content }) => {
  const newPost = await BlogPosts.create({ userId: user.id, title, content });
  const info = {
    id: newPost.id,
    userId: newPost.userId,
    title: newPost.title,
    content: newPost.content,
  };
  return info;
};

module.exports = {
  create,
};