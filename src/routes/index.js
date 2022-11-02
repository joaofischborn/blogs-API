const express = require('express');

const loginRouter = require('./login.router');
const authMiddleware = require('../middlewares/auth.middleware');
const userController = require('../controllers/user.controller');
const categoriesController = require('../controllers/categories.controller');
const postController = require('../controllers/post.controller');

const routers = express.Router();

routers.use('/login', loginRouter);
routers.post('/user', userController.addNewUser);
routers.get('/user', authMiddleware.validateToken, userController.getUser);
routers.get('/user/:id', authMiddleware.validateToken, userController.getUserById);
routers.post('/categories', authMiddleware.validateToken, categoriesController.insertNewCategory);
routers.get('/categories', authMiddleware.validateToken, categoriesController.getAllCategories);
// routers.post('/post', authMiddleware.validateToken, postController.addNewPost);
routers.get('/post', authMiddleware.validateToken, postController.getPosts);
module.exports = routers;
