const express = require("express");
// Router is a Class provided by express to act as a directory to perform actions based on the routes/paths
const router = express.Router();

const userController = require('../controllers/userController.js');
const validateToken = require("../middleware/validateTokenHandler.js");

router.route("/register").post(userController.createUser);
router.route("/login").post(userController.loginUser);

router.route("/current").get(validateToken, userController.currentUser);


module.exports = router;
