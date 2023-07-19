const express = require("express");
// Router is a Class provided by express to act as a directory to perform actions based on the routes/paths
const router = express.Router();

const contactController = require('./../controllers/contactController');

//route method is used to add a path and action to perform when the path matches
router.route("/").get(contactController.getContacts);

router.route("/").post(contactController.createContact);

router.route("/:id").get(contactController.getContact);

router.route("/:id").put(contactController.updateContact);

router.route("/:id").delete(contactController.deleteContact);

// exporting the route to be used by server
module.exports = router; 