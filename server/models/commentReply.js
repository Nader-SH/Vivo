import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config/connection.js";
export default class CommentReply extends Model {
  id;
  text_reply;
  likes;
  comment_id;
  user_id;
}
CommentReply.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text_reply: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize }
);

