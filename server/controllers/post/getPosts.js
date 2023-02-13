import { getPostsQuery } from "../../queries/post/index.js";

import { CustomError } from "../../utils/index.js";

const getPosts = async (req, res, next) => {
  const page  = req.query.page;
  try {
    const allPosts = await getPostsQuery(page);

    return res.status(201).json(allPosts);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export default getPosts;
