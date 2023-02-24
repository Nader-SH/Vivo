import { Chat } from "../../models/index.js";

const createMessageQuery = async (id, receiverId, message) => {
  try {
    const messageDone = await Chat.create({
      text_chat: message,
      message_sender_id: id,
      message_receive_id: receiverId,
    });
    return messageDone;
  } catch (error) {
    console.error("Error creating message:", error);
    throw new Error("Failed to create message");
  }
};

export default createMessageQuery;
