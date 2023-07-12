const express = require('express')
const router = express.Router()
const { getContacts, createContact, getContact, updateContact, deleteContact } = require("../controller/contactController");
const validationToken = require('../middleware/validateTokenHandler');

router.use(validationToken)
router.route('/').get(getContacts).post(createContact);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)

module.exports = router