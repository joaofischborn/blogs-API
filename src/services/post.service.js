// const Joi = require('joi');
const { Category, BlogPost, User } = require('../models');

// const validateFields = async (params, id) => {
//    const schema = Joi.object({
//         title: Joi.string().required(),
//         content: Joi.string().required(),
//         categoryIds: Joi.array().items(Joi.number()).required(),
//    });

//    const { error } = schema.validate(params);
//     if (error) return { type: 400, message: 'Some required fields are missing' };
//     const categoryIds = params.categoryIds.map((category) => Category.findByPk(category));
//     const result = await Promise.all(categoryIds);
//     if (!result) return { type: 400, message: 'one or more "categoryIds" not found' };
//     const newPost = { ...params, id };
//     console.log(newPost);
//     const createNewPost = await BlogPost.create(newPost);
//     return { type: null, message: createNewPost };
// };

const getPosts = async (userId) => {
     const posts = BlogPost.findAll({
          where: { userId },
          include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
          ],
        });
      
        return posts;
};

module.exports = { getPosts };