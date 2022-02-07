const isEmailInTheBody = (req, res, next) => {
  const { body } = req;
  const bodyKeys = Object.keys(body);
  if (!bodyKeys.includes('email')) {
    return res.status(400).json({
      message: '"email" is required',
    });
  }
  
  next();
};

module.exports = isEmailInTheBody;