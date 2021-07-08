import { User } from "../models/users.js";
import Joi from "@hapi/joi";
import crypto from "crypto";

export const findUser = ({ id }) => {
  return User.findById(id);
};

export const findUsers = ({ limit = 10, page = 1 }) => {
  return User.find({})
    .limit(10)
    .skip(limit * (page - 1));
};
export const deleteUsers = () => {
  return User.deleteMany()
};

export const registerUser = ({ user }) => {
  const { value, error } = userRegisterSchema.validate(user);

  if (error) {
    throw new Error(error);
  }
  const { username, email, password, avatarURL } = value;

  return User.create({
    username,
    email,
    password: sha512HashPassword(password, process.env.SESSION_SECRET),
    avatarURL,
  });
};

export const logInUser = ({ username, password }) => {
  return User.findOne({
    username,
    password: sha512HashPassword(password, process.env.SESSION_SECRET),
  });
};

export const updateUser = ({ user }) => { };

export const userRegisterSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  // repeat_password: Joi.ref("password"),

  avatarURL: Joi.string().uri(),

  email: Joi.string().email({
    minDomainSegments: 2,
    // tlds: { allow: ["com", "net"] },
  }),
});

export const sha512HashPassword = function (password, salt) {
  var hash = crypto.createHmac("sha512", salt); /** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest("hex");
  return value;
};