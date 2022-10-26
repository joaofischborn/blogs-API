const Joi = require('joi');
const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

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

    if (user) return { type: 409, message: 'User already registered' };

    const { password: _, ...userWithoutPassword } = params;
  
    const token = jwtUtil.createToken(userWithoutPassword);
    return token;
  };

module.exports = { validateFields, validateNewUser, createUser };