import { addPostsQuery } from "../../queries/post/index.js";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

import { CustomError } from "../../utils/index.js";

const addPosts = async (req, res, next) => {
  const { id } = req.user;
    try {
      await addPostsQuery(req.body, id);

      return res.status(201).json({
        message: "Post Add Success",
      });
    } catch (err) {
      console.log(err);
      res.status(err.status || 500).json({ message: err.message });
    }
};

export default addPosts;
