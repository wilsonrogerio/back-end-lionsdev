const { Router } = require('express');

const authRoute = Router();

const authController = require('./auth.controller');

authRoute.get('/register', authController.register);
authRoute.get('/login', authController.login)

module.exports = authRoute;