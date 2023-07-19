//@desc Get all contacts
//@route GET api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" })
};

//@desc Create a contact
//@route POST api/contacts
//@access public
const createContact = (req, res) => {
    res.status(201).json({ message: "Contact Created" });
};


//@desc Get a contact
//@route GET api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact ${req.params.id}` });
};

//@desc update a contact
//@route PUT api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact ${req.params.id}` });
};

//@desc delete a contact
//@route DELETE api/contacts
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact ${req.params.id}` });
};


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };