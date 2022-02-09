require('dotenv').config();
const jwt = require('jsonwebtoken');
const loginService = require('../services/login');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService.getByEmailAndPassword(email, password);

  const token = jwt.sign({ data: user }, process.env.JWT_SECRET);
  
  return res.status(200).json({ token });
};

module.exports = {
  login,
};