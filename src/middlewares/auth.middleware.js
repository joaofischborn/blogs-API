const authService = require('../services/auth.service');

const validateToken = async (req, res, next) => {
    const { authorization } = req.headers;
    const { error } = await authService.validateToken(authorization);
    if (error) return res.status(401).json({ message: error });

    next();
};

module.exports = { validateToken };