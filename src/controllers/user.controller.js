const userService = require('../services/user.service');

const addNewUser = async (req, res) => {
    const { type, message } = await userService.validateFields(req.body);
    if (type) return res.status(400).json({ message });

    const token = await userService.validateNewUser(req.body);
    
    if (!token.type) {
        await userService.createUser(req.body);
        return res.status(201).json({ token });
    }
    return res.status(409).json({ message: token.message });
};
//

module.exports = { addNewUser };