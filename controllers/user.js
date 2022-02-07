const userService = require('../services/user');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = userService.create({ displayName, email, password, image });

  return res.status(201).json(newUser);
};

module.exports = {
  create,
};