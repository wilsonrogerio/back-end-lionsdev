const { Router } = require('express');
const usersRouter = Router();
const usersController = require('./users.controller');

usersRouter.use('/list', usersController.list);

module.exports = usersRouter;