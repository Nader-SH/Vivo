import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config/connection.js";
export default class ShopProduct extends Model {
  id;
  product_name;
  status_text;
  status_color;
  rating;
  verified;
  size;
  ;
  color;
  price;
  trader_name;
  item_image;
  catagory_id;
  businesses_id;
}
ShopProduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // we must know about if the default value  false what is the pross
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discount_from: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    trader_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);