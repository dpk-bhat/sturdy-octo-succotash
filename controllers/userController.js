const asyncHandler = require('express-async-handler');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');
/**
 * @type {mongoose.Model}
 */
const User = require('../models/userModel');

//@desc Register user
//@route POST api/users
//@access public
const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory"); username
    }
    console.trace();
    const user = await User.findOne({ email })
    if (user) {
        res.status(400);
        throw new Error("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        username, email,
        password: hashedPassword
    })
    res.status(201).json({ result: { email: newUser.email, username: newUser.username }, message: "Get all contacts" })
});

module.exports = { createUser }
