const { Category } = require('../models');

const create = async ({ name }) => {
  const newUser = await Category.create({ name });
  return newUser;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  create,
  getAll,
};