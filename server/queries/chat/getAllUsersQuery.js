import { User } from "../../models/index.js";
import { Op } from "sequelize";

const getAllUserQuery = async (searchTerm) => {
  const queryOptions = {
    limit: 10,
    where: {},
  };

  if (searchTerm) {
    queryOptions.where.username = {
      [Op.like]: `%${searchTerm}%`,
    };
  }

  return User.findAll(queryOptions);
};

export default getAllUserQuery;
