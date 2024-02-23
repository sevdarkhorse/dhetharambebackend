// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    idNumber: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
