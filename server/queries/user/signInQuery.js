import { User } from '../../models/index.js';

const singInQuery = (userEmail) =>
User.findAll({
    where: {
      email: userEmail,
    },
  });

export default singInQuery;