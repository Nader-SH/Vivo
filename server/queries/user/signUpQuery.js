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

export { signUpQuery, findUserEmail };
