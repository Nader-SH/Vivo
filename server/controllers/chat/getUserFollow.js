import {
  getUserFollowQuery,
  getUsersArrayQuery,
} from "../../queries/chat/index.js";

const getUserFollow = async (req, res) => {
  const { id } = req.user;
  try {
    const usersFollow = await getUserFollowQuery(id);
    const userFollows = usersFollow.map((follow) => follow.get("user_follow"));
    const filterId = userFollows.filter((x) => x !== id);
    const data = await getUsersArrayQuery(filterId);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to Get Users" });
  }
};

export default getUserFollow;
