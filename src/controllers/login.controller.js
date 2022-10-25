const loginService = require('../services/login.service');

const login = async (req, res) => {
    const { email, password, message } = loginService.validateBody(req.body);
    if (message) return res.status(400).json({ message });

    const token = await loginService.validateLogin({ email, password });
    if (!token) return res.status(400).json({ message: 'Invalid fields' });
    
    res.status(200).json({ token });
};

module.exports = { login };