const categoryService = require('../services/category');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const categoryName = await categoryService.create({ name });
    return res.status(201).json(categoryName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
};