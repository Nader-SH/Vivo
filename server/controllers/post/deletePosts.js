import { deletePostsQuery } from "../../queries/post/index.js";

const deletePosts = async (req, res, next) => {
  const { id } = req.user;
    try {
      await deletePostsQuery(req.body.id, id);

      return res.status(201).json({
        message: "Delete Post Success",
      });
    } catch (err) {
      res.status(err.status || 500).json({ message: err.message });
    }
};

export default deletePosts;
