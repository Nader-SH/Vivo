import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config/connection.js";
export default class Businesses extends Model {
  id;
  busindess_name;
  busindess_description;
  industry;
  Location;
  user_id;
}
Businesses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    busindess_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    busindess_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);
