import { User } from "../../models/index.js";

const findUserEmail = async (email) =>
  User.findOne({
    where: {
      email,
    },
  });

const signUpQuery = async (data, hashed) =>
  User.create({
    ...data,
    password: hashed,
  });
const signUpGoogleQuery = async (name, picture, email) =>
  User.create({
    user_name: name,
    user_image: picture,
    email: email,
  });

export { signUpQuery, findUserEmail, signUpGoogleQuery };
