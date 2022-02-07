const isPasswordInTheBody = (req, res, next) => {
  const { body } = req;
  const bodyKeys = Object.keys(body);

  if (!bodyKeys.includes('password')) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }
  
  next();
};

module.exports = isPasswordInTheBody;