import { User } from "../../models/index.js";
import { Op } from "sequelize";
const getUsersArrayQuery = async (arr) => {
  return User.findAll({
      where: {
        [Op.or]: [{
          id: {
            [Op.in]: arr
          }
        },
        ],
      },
      attributes:["id","user_name","user_image","have_businesses"],
      
    })
};
export default getUsersArrayQuery;
