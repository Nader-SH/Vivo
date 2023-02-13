import { Storys, User } from "../../models/index.js";

const getStorysQuery = async (page) => {
  const limit = 7;
  return Storys.findAndCountAll({
    include: [
      {
        model: User,
        attributes: ["user_name", "id", "createdAt", "user_image"],
      },
    ],
    limit,
    offset: (page - 1) * limit,
    order: [["createdAt", "DESC"]],
  });
};

export default getStorysQuery;
