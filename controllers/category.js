const categoryService = require('../services/category');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    await categoryService.create({ name });
    return res.status(201).json({ message: 'Category successfully registered' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
};