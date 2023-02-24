import { getMessagesByReceiverIdQuery } from "../../queries/chat/index.js";

const getMessagesByReceiverIdController = async (req, res) => {
  console.log(req.params ,"params");
  const { id } = req.user;
  
  try {
    const { receiverId } = req.params;

    const newMessage = await getMessagesByReceiverIdQuery(receiverId, id);
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error get Receiver  message:", error);
    res.status(500).json({ error: "Failed to create message" });
  }
};

export default getMessagesByReceiverIdController;
