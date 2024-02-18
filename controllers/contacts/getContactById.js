const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  const { id } = req.params;

  const result = await Contact.findById(id);
  console.log("result", result);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = getContactById;
