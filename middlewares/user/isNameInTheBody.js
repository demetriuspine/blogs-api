const isNameInTheBody = (req, res, next) => {
  const { body } = req;
  const bodyKeys = Object.keys(body);
  if (!bodyKeys.includes('displayName')) {
    return res.status(400).json({
      message: '"displayName" is required',
    });
  }
  
  next();
};

module.exports = isNameInTheBody;