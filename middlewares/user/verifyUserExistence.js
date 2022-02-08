const userService = require('../../services/user');

const verifyUserExistence = async (req, res, next) => {
  const { id } = req.params;
  const user = await userService.getById(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  req.user = user;

  next();
};

module.exports = verifyUserExistence;