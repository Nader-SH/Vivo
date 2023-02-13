import { addCommentReplyQuery } from "../../queries/post/index.js";

import { CustomError } from "../../utils/index.js";

const addCommentReply = async (req, res, next) => {
  const { text_reply, comment_id } = req.body;
  const { id } = req.user;
  try {
    await addCommentReplyQuery(text_reply, comment_id, id);

    return res.status(201).json({
      message: "Comment Reply Add Success",
    });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export default addCommentReply;
