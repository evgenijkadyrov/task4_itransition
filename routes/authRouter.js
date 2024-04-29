const Router = require('express')
const {
    getUsers,
    registerUser,
    login,
} = require("../controllers/auth");
const {
    blockUsers,
    unBlockUsers, deleteUsers
} = require("../controllers/tableControls");
const router = new Router()
const {check} = require("express-validator")
const authMiddleware = require('../authMiddleware/authMiddleWare')

router.get('/users',
    authMiddleware,
    getUsers)
router.post('/register', [check(
    "name", "Name can not be empty"
).notEmpty()], registerUser);
router.post('/login', login);
router.post('/users/block', blockUsers);
router.post('/users/unblock', unBlockUsers);
router.delete('/users/delete', deleteUsers);

module.exports = router