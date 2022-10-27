const jwtUtil = require('../utils/jwt.util');

const validateToken = async (token) => {
    if (!token) {
        return { error: 'Token not found' };
    }
    const user = jwtUtil.validateToken(token);
    return user;
};

module.exports = { validateToken };