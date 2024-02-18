const express = require("express");

const { authenticate, upload } = require("../middlewares");

const {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updateSubscription,
  updateAvatar,
} = require("../controllers/auth");

const {
  registerUserSchema,
  loginUserSchema,
  currentUserSchema,
  subscribeUserSchema,
} = require("../schemas/usersSchemas");

const { validateBody } = require("../helpers");

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(registerUserSchema), registerUser);
usersRouter.post("/login", validateBody(loginUserSchema), loginUser);
usersRouter.post("/logout", authenticate, logoutUser);

usersRouter.get(
  "/current",
  authenticate,
  validateBody(currentUserSchema),
  currentUser
);

usersRouter.patch(
  "/",
  authenticate,
  validateBody(subscribeUserSchema),
  updateSubscription
);

usersRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

module.exports = usersRouter;
