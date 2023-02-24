import { Chat } from "../../models/index.js";
import { Op } from "sequelize";
const getMessagesByReceiverIdQuery = async (receiverId, id) => {
  try {
    const messages = await Chat.findAll({
      where: {
        [Op.or]: [
          {
            message_receive_id: { [Op.eq]: receiverId },
            message_sender_id: { [Op.eq]: id },
          },
          {
            message_receive_id: { [Op.eq]: id },
            message_sender_id: { [Op.eq]: receiverId },
          },
        ],
      },
      order: [["createdAt", "ASC"]],
    });
    return messages;
  } catch (error) {
    console.error("Error getting messages:", error);
    throw new Error("Failed to get messages");
  }
};
export default getMessagesByReceiverIdQuery;
