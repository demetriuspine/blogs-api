const { Category } = require('../models');

const create = async ({ name }) => {
  const newUser = await Category.create({ name });
  return newUser;
};

module.exports = {
  create,
};