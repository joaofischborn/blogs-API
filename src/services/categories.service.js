const Joi = require('joi');
const { Category } = require('../models');

const insertNewCategory = async (params) => {
    const schema = Joi.object({
        name: Joi.string().required().messages({
            message: '"name" is required',
        }),
    });
    const { error } = schema.validate(params);
    if (error) return { type: 400, message: error.message };
    Category.create(params);
    return { type: null, message: params };
};

module.exports = { insertNewCategory };