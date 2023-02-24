import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config/connection.js";
export default class ListChat extends Model {
  id;
  message_sender_id;
  message_receive_id;
}
ListChat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message_sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message_receive_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize }
);
