import { CommentReply } from '../../models/index.js';

const addCommentReplyQuery = async (text_reply,comment_id,user_id) =>
CommentReply.create({
    text_reply:text_reply,
    comment_id :comment_id,
    user_id : user_id,
  });

export default addCommentReplyQuery;