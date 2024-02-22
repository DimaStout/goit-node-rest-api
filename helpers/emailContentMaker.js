require("dotenv").config();
const { BASE_URL } = process.env;

const emailContentMaker = (verificationCode) => {
  return `<a href="${BASE_URL}/users/verify/${verificationCode}" target="_blank" rel="noopener nofollow noreferrer"> Click here to verify your email </a>`;
};

module.exports = emailContentMaker;
