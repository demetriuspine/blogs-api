const isNameInTheBody = (req, res, next) => {
  const { body } = req;
  const bodyKeys = Object.keys(body);

  if (!bodyKeys.includes('name')) {
    return res.status(400).json({ message: '"name" is required' });
  }

  next();
};

module.exports = {
  isNameInTheBody,
};