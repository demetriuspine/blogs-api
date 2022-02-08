require('dotenv').config();
const jwt = require('jsonwebtoken');
const loginService = require('../services/login');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await loginService.getByEmailAndPassword(email, password);

  const data = { 
    id: response.id,
    displayName: response.displayName,
    email: response.email,
    image: response.image,
  };

  const token = jwt.sign({ data }, process.env.JWT_SECRET);
  
  return res.status(200).json({ token });
};

module.exports = {
  login,
};