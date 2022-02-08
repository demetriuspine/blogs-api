const { User } = require('../models');

const getByEmailAndPassword = async (email, password) => {
  const response = await User.findOne({
    where: { email, password },
  });
  return response;
};

module.exports = {
  getByEmailAndPassword,
};