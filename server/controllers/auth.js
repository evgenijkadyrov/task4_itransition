const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {validationResult} = require("express-validator")
const moment = require("moment-timezone");

const generateAccessToken = (id, email) => {
    const payload = {
        id, email
    }
    return jwt.sign(payload, process.env.SECRET, {expiresIn: "30d"})
}
const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({message: "Failed to receive users"})
    }
}

const registerUser = async (req, res) => {
        const {email, password, name} = req.body;
        if (!email || !password || !name) {
            return res.status(400).json({message: 'Check field email, password, name'});
        }
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                res.status(400).json({message: "Errors", errors})
            }
            const existingUser = await User.findOne({email});
            if (existingUser) {
                return res.status(400).json({message: 'User with such email registered'});
            }
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            const user = await User.create({
                name,
                email,
                password: hashPassword,
                status: 'active',
                lastLogin: ''
            });

            await user.save();
            return res.status(200).json({message: 'User registered success'})
        } catch
            (error) {
            console.error('Error creating user:', error);
            return res.status(500).json({message: 'Server error'});
        }
    }
;
const login = async (req, res) => {

    try {
        const {email, password} = req.body
        const user = await User.findOne({email})

        if (user === null) {
            return res.status(400).json({message: "User not found"})
        }
        if (user.status === 'block') {

            return res.status(401).json({message: "User blocked"})
        }
        const isValidPassword = bcrypt.compareSync(password, user.password)
        if (!isValidPassword) {
            return res.status(400).json({message: "Password not correct"})
        }
        const currentDateUTC = new Date()
        const currentDateBLR = moment(currentDateUTC).tz('Europe/Minsk').add(3, 'hours')

        user.lastLogin = currentDateBLR.toISOString().replace('T', ' ').slice(0, 19);
        await user.save();
        const token = generateAccessToken(user._id, user.email)
        return res.json({token, user})

    } catch (err) {
        res.status(400).json({message: "Login error", err})
    }
}

module.exports = {getUsers, registerUser, login}