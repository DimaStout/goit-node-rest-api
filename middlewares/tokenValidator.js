const { HttpError } = require("../helpers");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const User = require("../models/user");
const { ctrlWrapper } = require("../helpers");

const tokenValidator = async (req, res, next) => {
  const authHeader = req.headers.authorization || " ";

  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || token === "") {
    throw new HttpError(401, "Not authorized");
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const { id } = decodedToken;

    const user = await User.findById(id);
    req.user = user;

    if (!user || user.token !== token) {
      throw new HttpError(401, "Not authorized");
    }

    next();
  } catch (error) {
    if (
      error.name === "TokenExpiredError" ||
      error.name === "JsonWebTokenError"
    ) {
      throw new HttpError(401, "JWT token is not valid");
    }
    throw error;
  }
};

module.exports = { tokenValidator: ctrlWrapper(tokenValidator) };
