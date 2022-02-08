require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const jwtValidation = async (req, res, next) => { // função adaptada do conteudo do course
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ where: { id: decoded.data.id } });

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = jwtValidation;