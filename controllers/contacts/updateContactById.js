const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateContactById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = updateContactById;
