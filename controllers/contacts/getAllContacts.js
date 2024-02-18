const { Contact } = require("../../models");

const getAllContacts = async (req, res, next) => {
  const { limit, page, favorite } = req.query;

  const skip = (page - 1) * limit;

  const { _id: owner } = req.user;

  if (favorite) {
    const result = await Contact.find(
      { owner, favorite },
      "-createdAt -updatedAt"
    )
      .skip(skip)
      .limit(limit);
    res.status(200).json(result);
  }

  const result = await Contact.find({ owner }, "-createdAt -updatedAt")
    .skip(skip)
    .limit(limit);
  res.status(200).json(result);
};

module.exports = getAllContacts;
