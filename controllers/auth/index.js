const { ctrlWrapper } = require("../../helpers");

const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const currentUser = require("./currentUser");
const updateSubscription = require("./updateSubscription.js");

updateSubscription;

module.exports = {
  registerUser: ctrlWrapper(registerUser),
  loginUser: ctrlWrapper(loginUser),
  logoutUser: ctrlWrapper(logoutUser),
  currentUser: ctrlWrapper(currentUser),
  updateSubscription: ctrlWrapper(updateSubscription),
};
