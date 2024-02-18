const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password should be at least 6 characters long"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
