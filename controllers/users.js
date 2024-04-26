const User = require('../models/user')

const getUsers = async (req, res) => {
    try {

        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({message: "Failed to receive cars"})
    }
}

module.exports = {getUsers}