import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config/connection.js";
export default class Storys extends Model {
  id;
  image;
  user_id;
}
Storys.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize }
);

