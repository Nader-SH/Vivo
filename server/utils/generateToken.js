import pkg from 'jsonwebtoken';
const {sign} = pkg;

const key = process.env.SECRET_KEY;

const generateToken = (payload) =>
  new Promise((resolve, reject) => {
    sign(payload, key, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });

export default generateToken;
