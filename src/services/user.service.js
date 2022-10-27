const Joi = require('joi');
const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

const getUser = async () => User.findAll({ attributes: { exclude: ['password'] } });

const getUserById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (user) return { type: null, message: user };
    return { type: 404, message: 'User does not exist' };
};

const createUser = async ({ displayName, email, password, image }) => {
    User.create({ displayName, email, password, image });
};

const validateFields = async (params) => {
   const schema = Joi.object({
        displayName: Joi.string().min(8).required().messages({
            message: '"displayName" length must be at least 8 characters long' }),
        email: Joi.string().email().required().messages({
            message: '"email" must be a valid email',
        }),
        password: Joi.string().min(6).required().messages({
            message: '""password" length must be at least 6 characters long"',
        }),
        image: Joi.string(),
   });
   const { error } = schema.validate(params);  

    if (error) return { type: 400, message: error.message };

    return { type: null };
};

const validateNewUser = async (params) => {
    const { email } = params;
    const user = await User.findOne({ where: { email } });  
    console.log(user);

    if (user) return { type: 409, message: 'User already registered' };

    const { password: _, ...userWithoutPassword } = params;
  
    const token = jwtUtil.createToken(userWithoutPassword);
    return token;
  };

module.exports = { getUser, getUserById, validateFields, validateNewUser, createUser };