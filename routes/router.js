const { Router } = require('express');
const router = Router();

const authRoute = require('../modules/auth/auth.route');
const usersRoute = require('../modules/users/users.route');

router.use('/auth', authRoute);
router.use('/user', usersRoute);

module.exports = router;