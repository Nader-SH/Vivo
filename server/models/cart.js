import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config/connection.js";
export default class Cart extends Model {
  id;
  checked;
  quantity;
  product_id;
  user_id;
}
Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    checked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize }
);

