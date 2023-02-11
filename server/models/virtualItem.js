import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config/connection.js";
export default class VirtualItem extends Model {
  id;
  item_name;
  item_image;
  verified;
  current_B_id;
  time_left;
  collection_number;
  likes;
  user_id;
  categorie_id;
}
VirtualItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    current_B_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    time_left: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collection_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  { sequelize }
);
