const express = require("express");
// Router is a Class provided by express to act as a directory to perform actions based on the routes/paths
const router = express.Router();

const contactController = require('./../controllers/contactController');
const validateToken = require("../middleware/validateTokenHandler");

// this middleware will be used for all the below routes
// thus making all the routes private for the users 
// as we will be validating the users token
router.use(validateToken);

//route method is used to add a path and action to perform when the path matches
router.route("/")
    .get(contactController.getContacts)
    .post(contactController.createContact);

router.route("/:id")
    .get(contactController.getContact)
    .put(contactController.updateContact)
    .delete(contactController.deleteContact);

// exporting the route to be used by server
module.exports = router; 