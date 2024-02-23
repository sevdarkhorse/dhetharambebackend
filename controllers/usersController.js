// controllers/userController.js
const User = require('../models/usersModel');

exports.createUser = async (req, res) => {
    try {
        // console.log('bodyyyyy', req.body);
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        // console.log('userrrr', savedUser);
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
