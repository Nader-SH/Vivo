import Joi from 'joi';

const signinValidation = (email, loginPassword) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    loginPassword: Joi.string().required(),
  });

  return schema.validateAsync({ email, loginPassword });
};

export default signinValidation;