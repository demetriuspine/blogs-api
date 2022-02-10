const { BlogPosts, User, Category } = require('../models');

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

const getAll = async () => { // adaptado do course https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-associations/043e2e8a-c28e-4b95-a949-b7c43221ca8d/conteudos/6a2dbadd-f6c8-400c-9b89-731064a534a6/relacionamentos-nn/2f990148-7b3d-4617-ad46-84331d8df1fd?use_case=side_bar
  const blogPosts = await BlogPosts.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  return blogPosts;
};

module.exports = {
  create,
  getAll,
};