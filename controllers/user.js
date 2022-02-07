const userService = require('../services/user');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await userService.create({ displayName, email, password, image });
    return res.status(201).json({ message: 'User successfully registered' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
};