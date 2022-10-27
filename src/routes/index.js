const express = require('express');

const loginRouter = require('./login.router');
const authMiddleware = require('../middlewares/auth.middleware');
const userController = require('../controllers/user.controller');

const routers = express.Router();

routers.use('/login', loginRouter);
routers.post('/user', userController.addNewUser);
routers.get('/user', authMiddleware.validateToken, userController.getUser);

module.exports = routers;
