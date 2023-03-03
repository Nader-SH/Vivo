import { UserFollow } from "../../models/index.js";

const findUserEmail = async (theUser, id) =>
UserFollow.findOne({
    where: {
        user_follow : theUser,
        user_id : id,
    },
  });

export default findUserEmail;
