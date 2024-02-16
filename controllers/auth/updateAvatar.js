const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");

const Jimp = require("jimp");
const { changeImageSize } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user;

  const { path: tempUpload, originalname } = req.file;

  const filename = `${_id}_${originalname}`;

  const resultUpload = path.join(avatarsDir, filename);

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", filename);
  changeImageSize(avatarURL);

  await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });

  res.json({ avatarURL });
};

module.exports = updateAvatar;
