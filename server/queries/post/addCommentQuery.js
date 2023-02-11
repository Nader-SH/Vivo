import { Comment } from '../../models/index.js';

const addCommentQuery = async (text_comment,post_id,user_id) =>
Comment.create({
    text_comment:text_comment,
    post_id :post_id,
    user_id : user_id,
  });

export default addCommentQuery;