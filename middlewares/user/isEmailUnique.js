const userServices = require('../../services/user');

const isEmailUnique = async (req, res, next) => {
  const { email } = req.body;
  const response = await userServices.isEmailUnique(email); // https://sequelize.org/v7/manual/model-querying-finders.html#-code-findone--code-

  if (response === null) {
    return next();
  }
  
  return res.status(409).json({
    message: 'User already registered',
  });
};

module.exports = isEmailUnique;