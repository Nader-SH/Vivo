import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config/connection.js";
export default class Chat extends Model {
  id;
  text_chat;
  chat_date;
  message_sender_id;
  message_receive_id;
}
Chat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text_chat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chat_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message_sender_id:{
      type: DataTypes.INTEGER,
      unique: false,
    },
    message_receive_id:{
      type: DataTypes.INTEGER,
      unique: false,
    },
  },
  { sequelize }
);
