const User = require("../models/user");
const blockUsers = async (req, res) => {
    const {usersEmail, userEmail} = req.body;


    try {
        const users = await User.find({email: {$in: usersEmail}});
        if (users.length === 0) {
            return res.status(404).json({message: 'Users not found'});
        }

        const updatedUsers = await Promise.all(
            users.map(async (user) => {

                user.status = 'block';
                await user.save();
                return user;
            })
        );
        const blockItself = users.some((user) => user.email === userEmail);


        return res.status(200).json({
            message: 'Users blocked successfully',
            users: updatedUsers,
            blockItself
        });
    } catch (error) {
        console.error('Error blocking users:', error);
        return res.status(500).json({message: 'Server error'});
    }
};
const unBlockUsers = async (req, res) => {
    const {usersEmail} = req.body;


    try {
        const users = await User.find({email: {$in: usersEmail}});
        if (users.length === 0) {
            return res.status(404).json({message: 'Users not found'});
        }

        const updatedUsers = await Promise.all(
            users.map(async (user) => {
                user.status = 'active';
                await user.save();
                return user;
            })
        );

        return res.status(200).json({
            message: 'Users unblocked successfully',
            users: updatedUsers
        });
    } catch (error) {
        console.error('Error blocking users:', error);
        return res.status(500).json({message: 'Server error'});
    }
};
const deleteUsers = async (req, res) => {
    try {
        const {usersEmail} = req.body;
        const users = await User.find({email: {$in: usersEmail}});

        if (users.length === 0) {
            return res.status(404).json({error: 'Users not found'});
        }
        await User.deleteMany({email: {$in: usersEmail}});

        res.json({message: 'Users deleted successfully'});
    } catch (error) {
        console.error('Error deleting users:', error);
        res.status(500).json({error: 'Server error'});
    }
};
module.exports = { blockUsers, unBlockUsers, deleteUsers}