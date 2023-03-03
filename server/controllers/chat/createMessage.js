import { createMessageQuery } from "../../queries/chat/index.js";

const createMessageController = async (req, res, next) => {
  const { message } = req.body;
  const { id } = req.user;
  const { receiverId } = req.params;
  try {
    await createMessageQuery(id, receiverId, message);
    res.status(201)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default createMessageController;
