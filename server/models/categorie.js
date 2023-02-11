import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config/connection.js";
export default class Catagory extends Model {
  id;
  categories_name;
}
Catagory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categories_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);

