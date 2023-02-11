import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config/connection.js";
export default class Post extends Model {
  id;
  text_post;
  images_post;
  likes;
  user_id;
}
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text_post: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images_post: {
      type: DataTypes.TEXT,
      defaultValue:""
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize }
);
