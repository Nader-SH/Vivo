import { Post } from '../../models/index.js';

const addPostsQuery = async (data,id) =>
Post.create({
    ...data,
    user_id : id,
  });

export default addPostsQuery;