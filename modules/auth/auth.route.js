const { Router } = require('express');

const authRoute = Router();

const authController = require('./auth.controller');

authRoute.get('/register', authController.register);

module.exports = authRoute;