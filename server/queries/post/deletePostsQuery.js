import { Post } from "../../models/index.js";

const deletePostsQuery = async (postId, id) =>
  Post.destroy({
    where: {
      id: postId,
      user_id: id,
    },
  });

export default deletePostsQuery;
