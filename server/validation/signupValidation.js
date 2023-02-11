import Joi from "joi";

const signupValidation = (data) => {
  const schema = Joi.object({
    user_name: Joi.string().required(),
    email: Joi.string().email().required(),
    user_image: Joi.string(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
  });

  return schema.validateAsync(data);
};

export default signupValidation;
