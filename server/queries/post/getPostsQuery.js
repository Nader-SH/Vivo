import { Post, User, Comment, CommentReply } from "../../models/index.js";

const getPostsQuery = async (page) => {
  const limit = 5;
  return Post.findAndCountAll({
    attributes: ["id", "text_post", "images_post", "likes", "createdAt"],
    include: [
      {
        model: User,
        attributes: ["user_name", "id", "createdAt", "user_image"],
      },
      {
        model: Comment,
        attributes: [
          "id",
          "comment_date",
          "likes",
          "text_comment",
          "createdAt",
          "user_id",
          "post_id"
        ],
        include: [
          {
            model: User,
            attributes: ["id", "user_name", "createdAt", "user_image"],
          },
          {
            model: CommentReply,
            include: [
              {
                model: User,
                attributes: ["id", "user_name", "createdAt", "user_image"],
              },
            ],
            attributes: [
              "id",
              "text_reply",
              "likes",
              "createdAt",
              "comment_id",
            ],
            order: [["createdAt", "DESC"]],
          },
        ],
        order: [["createdAt", "DESC"]],
      },
    ],
    limit,
    offset: (page - 1) * limit,
    order: [["createdAt", "DESC"]],
  });
};

export default getPostsQuery;
