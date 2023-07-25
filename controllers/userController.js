const asyncHandler = require('express-async-handler');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
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
        throw new Error("All fields are mandatory");
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
    if (newUser) {
        res.status(201).json({ result: { email: newUser.email, username: newUser.username }, message: "User created successfully" });
    } else {
        res.status(400);
        throw new Error("User data is invalid");
    }
});


//@desc Login
//@route POST api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "1m"
        })
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Email or password is not valid");
    }
});


//@desc Current user info
//@route POST api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.status(200);
    res.json(req.user);

})

module.exports = { createUser, loginUser, currentUser }
