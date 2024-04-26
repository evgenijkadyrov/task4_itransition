const Router = require('express')
const {getUsers, registerUser, login} = require("../controllers/auth");
const router = new Router()
const {check} = require("express-validator")
const authMiddleware= require('../authMiddleware/authMiddleWare')

router.get('/users', getUsers)
router.post('/register', [check(
    "name", "Name can not be empty"
).notEmpty()], registerUser);
router.post('/login',authMiddleware, login);

module.exports = router