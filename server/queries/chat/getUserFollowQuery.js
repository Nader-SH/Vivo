import { UserFollow, User } from "../../models/index.js";
import { Op } from "sequelize";
const getUserFollowQuery = async (id) => {
  return UserFollow.findAll({
    where: {
      [Op.or]: [
        {
          user_follow: { [Op.eq]: id },
        },
        {
          user_id: { [Op.eq]: id },
        },
      ],
    },
  })
};
export default getUserFollowQuery;
