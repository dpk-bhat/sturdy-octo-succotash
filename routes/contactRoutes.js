const express = require("express");
// Router is a Class provided by express to act as a directory to perform actions based on the routes/paths
const router = express.Router();

//route method is used to add a path and action to perform when the path matches
router.route("/").get((req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});

router.route("/").post((req, res) => {
    res.status(201).json({ message: "Contact Created" });
});

router.route("/:id").get((req, res) => {
    res.status(200).json({ message: `Get contact ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
    res.status(200).json({ message: `Update contact ${req.params.id}` });
});


router.route("/:id").delete((req, res) => {
    res.status(200).json({ message: `Delete contact ${req.params.id}` });
});

// exporting the route to be used by server
module.exports = router; 