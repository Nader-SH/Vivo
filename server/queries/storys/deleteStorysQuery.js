import { Post } from "../../models/index.js";

const deleteCommentsQuery = async (commentId, id) =>
  Post.destroy({
    where: {
      id: commentId,
      user_id: id,
    },
  });

export default deleteCommentsQuery;
