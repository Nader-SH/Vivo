import pkg from "bcryptjs";
const { compare } = pkg;
import { signinValidation } from "../../validation/index.js";

import { singInQuery } from "../../queries/user/index.js";

import { generateToken, CustomError } from "../../utils/index.js";

const signIn = async (req, res, next) => {
  try {
    const { email, password: signInPass } = req.body.data;
    await signinValidation(email, signInPass);

    const loginData = await singInQuery(email);
    if (loginData.length === 0)
      throw new CustomError(400, "Invalid email or password, Try again");

    const password = loginData[0].dataValues.password;
    const passwordCompare = await compare(signInPass, password);
    if (!passwordCompare)
      throw new CustomError(400, "Wrong Password, Try again");
    const token = await generateToken({
      id: loginData[0].dataValues.id,
      email: loginData[0].dataValues.email,
      password: loginData[0].dataValues.password,
      user_image: loginData[0].dataValues.user_image,
      user_name: loginData[0].dataValues.user_name,
      updatedAt: loginData[0].dataValues.updatedAt,
    });
    return res.cookie("token", token, { httpOnly: true }).json({
      data: {
        id: loginData[0].dataValues.id,
        email: loginData[0].dataValues.email,
        user_name: loginData[0].dataValues.user_name,
        image: loginData[0].dataValues.user_image,
        businesses: loginData[0].dataValues.have_businesses,
      },
      message: "Success",
    });
  } catch (err) {
    // if (err.name === "ValidationError") {
    //   next(new CustomError(400, "Something went wrong, Try again"));
    // }
    next(CustomError(err));
  }
};

export default signIn;
