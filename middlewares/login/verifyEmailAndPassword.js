const loginService = require('../../services/login');

const verifyEmailAndPassword = async (req, res, next) => {
  const { email, password } = req.body;
  const response = await loginService.getByEmailAndPassword(email, password);

  if (response === null) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

module.exports = {
  verifyEmailAndPassword,
};