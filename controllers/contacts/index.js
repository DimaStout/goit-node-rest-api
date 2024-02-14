const { ctrlWrapper } = require("../../helpers");

const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const deleteContactById = require("./deleteContactById");
const createContact = require("./createContact");
const updateContactById = require("./updateContactById");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  deleteContactById: ctrlWrapper(deleteContactById),
  createContact: ctrlWrapper(createContact),
  updateContactById: ctrlWrapper(updateContactById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
