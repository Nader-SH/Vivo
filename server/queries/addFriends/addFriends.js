import { UserFollow } from '../../models/index.js';

const addFriendsQuery = async (theUser,id) =>
UserFollow.create({
    user_follow : theUser,
    user_id : id,
  });

export default addFriendsQuery;
