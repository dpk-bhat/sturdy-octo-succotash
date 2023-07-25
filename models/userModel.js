const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    username: {
        type: String,
        required: [true, "Please add username"]
    },
    email: {
        type: String,
        required: [true, "Please add email"]
    },
    password: {
        type: String,
        required: [true, "Please add password"]
    },
},
    {
        timestamps: true
    }

);

module.exports = mongoose.model("User", userModel);