import { Storys } from "../../models/index.js";

const deleteStorysQuery = async (storyId, id) =>
  Storys.destroy({
    where: {
      id: storyId,
      user_id: id,
    },
  });

export default deleteStorysQuery;
