import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config/connection.js";

export default  class UserFollow extends Model {
  id;
  user_follow;
  following_him_since;
  user_id;
}
UserFollow.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_follow: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    following_him_since: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize }
);

