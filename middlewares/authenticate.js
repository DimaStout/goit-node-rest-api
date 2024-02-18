const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers");
const { User } = require("../models");
require("dotenv").config();

const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  console.log(JWT_SECRET);
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401, "Not authorized"));
  }
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    console.log(JWT_SECRET);
    const user = await User.findById(id);
    if (!user.token) {
      next(HttpError(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch {
    next(HttpError(401, "Not authorized"));
  }
};

module.exports = authenticate;
