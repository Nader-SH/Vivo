import { User } from "../../models/index.js";
import { Op } from "sequelize";
const getUsersArrayQuery = async (arr) => {
  return User.findAll({
      where: {
        id: {
          [Op.in]: arr
        }
      }
    })
};
export default getUsersArrayQuery;
