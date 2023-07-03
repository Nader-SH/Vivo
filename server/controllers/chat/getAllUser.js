import { getAllUserQuery } from "../../queries/chat/index.js";

const getAllUser = async (req, res) => {
    const userName = req.body;
  try {
    const usersList = await getAllUserQuery(userName);
    res.status(201).json(usersList);
  } catch (error) {
    res.status(500).json({ error: "Failed to Get Users" });
  }
};

export default getAllUser;
