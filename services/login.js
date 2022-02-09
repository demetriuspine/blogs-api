const { User } = require('../models');

const getByEmailAndPassword = async (email, password) => {
  const response = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] }, // adaptado do conteúdo sobre associations do course
  });
  return response.dataValues;
};

module.exports = {
  getByEmailAndPassword,
};