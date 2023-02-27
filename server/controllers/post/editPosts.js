import { editPostsQuery } from "../../queries/post/index.js";


import { CustomError } from "../../utils/index.js";

const editPosts = async (req, res, next) => {
  const { id } = req.user;
  console.log(req.body);
    try {
      await editPostsQuery(req.body, id);

      return res.status(201).json({
        message: "edit Post Success",
      });
    } catch (err) {
      res.status(err.status || 500).json({ message: err.message });
    }
};

export default editPosts;
