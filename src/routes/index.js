const express = require('express');

const loginRouter = require('./login.router');
const authMiddleware = require('../middlewares/auth.middleware');
const userController = require('../controllers/user.controller');

const routers = express.Router();

routers.use('/login', loginRouter);
routers.post('/user', userController.addNewUser);
routers.use(authMiddleware.validateToken);
routers.get('/user', userController.getUser);

module.exports = routers;