import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config/connection.js";

export default class Comment extends Model {
  id;
  text_comment;
  likes;
  comment_date;
  post_id;
  user_id;
}
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text_comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment_date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull:false,
    }
  },
  { sequelize }
);

