const postService = require('../services/post.service');

// const addNewPost = async (req, res) => {
//     const id = req.user;
//     const { type, message } = await postService.validateFields(req.body, id);
//     if (type) return res.status(400).json({ message });
//     return res.status(201).json(message);
// };

const getPosts = async (req, res) => {
    const posts = await postService.getPosts(req.user);
    res.status(200).json(posts);
};

module.exports = { getPosts };