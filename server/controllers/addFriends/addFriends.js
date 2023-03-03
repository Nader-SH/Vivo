import {
  addFriendsQuery,
  findUserEmail,
} from "../../queries/addFriends/index.js";

const addFriends = async (req, res) => {
  const { id } = req.user;
  const { theUser } = req.body;
  try {
    const userFollowsOrNot = await findUserEmail(theUser, id);
    if (userFollowsOrNot !== null) {
      res.status(500).json({ message: "You are already friends !" });
    } else {
      try {
        await addFriendsQuery(theUser, id);
        res.status(201).json({ message: "Add Friend Done !" });
      } catch (error) {
        res.status(500).json({ error: "Failed to Add Friend" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "You can not add this" });
  }
};

export default addFriends;
