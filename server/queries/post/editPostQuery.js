import { Post } from "../../models/index.js";

const editPostsQuery = async (postText, postId, id) =>
  Post.update({
    where: {
      id: postId,
      user_id: id,
    },
    text_post: postText,
  });

export default editPostsQuery;
