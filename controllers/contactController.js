const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");
/**
 * @type {mongoose.Model}
 */
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json({ result: contacts, message: "Get all contacts" })
});

//@desc Create a contact
//@route POST api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({ name, email, phone });
    res.status(201).json({ result: contact, message: "Contact Created" });
});


//@desc Get a contact
//@route GET api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({ result: contact, message: `Get contact ${req.params.id}` });
});

//@desc update a contact
//@route PUT api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updateContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ result: updateContact, message: `Update contact ${req.params.id}` });
});

//@desc delete a contact
//@route DELETE api/contacts
//@access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndRemove(req.params.id);
    console.log(contact);
    res.status(200).json({ result: contact, message: `Delete contact ${req.params.id}` });
});


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };