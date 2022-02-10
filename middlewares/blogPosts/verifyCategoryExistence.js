const { Category } = require('../../models');

const verifyCategoryExistence = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categories = await Category.findAll({ where: { id: categoryIds } });

  console.log(categories.length);

  if (categories.length !== categoryIds.length) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = verifyCategoryExistence;