import { signUpQuery, findUserEmail, singInQuery } from "../../queries/user/index.js";
import { signupValidation } from "../../validation/index.js";
import { generateToken, CustomError } from "../../utils/index.js";
import pkg from "bcryptjs";
const { hash } = pkg;

const signUp = async (req, res, next) => {
  try {
    await signupValidation(req.body.data);
    
    const emailExisted = await findUserEmail(req.body.data.email);
    if (emailExisted) {
      throw new CustomError(
        400,
        "Try again, This email is already existed",
        );
      }

      if (req.body.data.password !== req.body.data.confirmPassword){
        throw new CustomError(
          400,
         "Password and confirm password must be the same",
       );
      }

    const hashed = await hash(req.body.data.password, 10);
    const haveBusinesses = false;
    const userData = await signUpQuery(req.body.data, hashed, haveBusinesses);

    return res.status(201).json({
      userData:userData,
      message: "Success",
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      return next(new CustomError(err.status, err.message));
    }
    // return next(err);
    res.status(err.status || 500).json({message : err.message});
  }
};

export default signUp;
