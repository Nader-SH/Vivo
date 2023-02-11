import { Post } from '../../models/index.js';

const addPostsImageQuery = async (data,id) =>
Post.create({
    ...data,
    user_id : id,
  });

export default addPostsImageQuery;