import { Op } from "sequelize";
import { Storys } from "../../models/index.js";
// Delete stories that were created more than 24 hours ago
const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
const timeStoryQuery = async () => {
  Storys.destroy({
    where: {
      createdAt: {
        [Op.lt]: twentyFourHoursAgo,
      },
    },
  })
};
export default timeStoryQuery;
