const { User } = require('../models');

const create = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = {
  create,
  getAll,
};