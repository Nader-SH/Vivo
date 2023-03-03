import { UserFollow, User } from "../../models/index.js";
import { Op } from "sequelize";
const getUserFollowQuery = async (id) => {
  return UserFollow.findAll({
    where: {
      [Op.or]: [
        {
          user_follow: id,
        },
        {
          user_id: id,
        },
      ],
    },
  });
};
export default getUserFollowQuery;
