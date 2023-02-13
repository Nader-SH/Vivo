import { addCommentQuery } from "../../queries/post/index.js";

import { CustomError } from "../../utils/index.js";

const addComment = async (req, res, next) => {
  const { text_comment, post_id } = req.body;
  const { id } = req.user;
  try {
    await addCommentQuery(text_comment, post_id, id);
    return res.status(201).json({
      message: "Comment Add Success",
    });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export default addComment;
