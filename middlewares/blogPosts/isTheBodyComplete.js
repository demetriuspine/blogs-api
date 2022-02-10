const Joi = require('joi');

const isTheBodyComplete = (req, res, next) => { // adaptado de https://softchris.github.io/pages/joi.html#building-a-middleware e com ajuda de michael caxias
  const joiValidation = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  });

  const result = joiValidation.validate(req.body);

  if (result.error !== undefined) {
    const { error } = result;
    console.log(result.error);
    return res.status(400).json({ message: error.details[0].message }); // [0] para não receber undefined
  }
  next();
};

module.exports = {
  isTheBodyComplete,
};