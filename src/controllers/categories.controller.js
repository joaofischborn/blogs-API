const categoriesService = require('../services/categories.service');

const insertNewCategory = async (req, res) => {
    const { type, message } = await categoriesService.insertNewCategory(req.body);
    if (type) return res.status(400).json({ message });
    return res.status(201).json(message);
};

module.exports = { insertNewCategory };