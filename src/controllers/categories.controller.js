const categoriesService = require('../services/categories.service');

const insertNewCategory = async (req, res) => {
    const { type, message } = await categoriesService.insertNewCategory(req.body);
    if (type) return res.status(400).json({ message });
    return res.status(201).json(message);
};

const getAllCategories = async (_req, res) => {
    const categories = await categoriesService.getAllCategories();
    res.status(200).json(categories);
};

module.exports = { insertNewCategory, getAllCategories };