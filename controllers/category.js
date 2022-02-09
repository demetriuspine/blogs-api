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

const getAll = async (_req, res) => {
  try {
    const categories = await categoryService.getAll();
    return res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  getAll,
};