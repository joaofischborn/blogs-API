const authService = require('../services/auth.service');
const loginService = require('../services/login.service');

const login = async (req, res) => {
    const { email, password } = loginService.validateBody(req.body);

    const token = await authService.validateToken({ email, password });

    res.status(200).json({ token });
};

module.exports = { login };