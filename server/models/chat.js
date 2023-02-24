import { Model, DataTypes ,Sequelize} from "sequelize";
import sequelize from "../database/config/connection.js";
export default class Chat extends Model {
  id;
  text_chat;
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
    message_sender_id:{
      type: DataTypes.INTEGER,
      unique: false,
    },
    message_receive_id:{
      type: DataTypes.INTEGER,
      unique: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  { sequelize }
);
