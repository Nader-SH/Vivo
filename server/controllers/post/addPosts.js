import { addPostsQuery } from "../../queries/post/index.js";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

import { CustomError } from "../../utils/index.js";

const addPosts = async (req, res, next) => {
  console.log(req.body, "body");
  const { id } = req.user;
  const { images_post } = req.body;
  console.log(req.files);
  if (images_post) {
    console.log("its here");
    cloudinary.config({
      cloud_name: "dylk90sig",
      api_key: "918692263246299",
      api_secret: "30GBpoZsa-MH5LmVBnUOCPX1P4I",
    });

    try {
      const upload = multer({ dest: "uploads/" });
      const result = await cloudinary.uploader.upload(req.body.images_post, {
        resource_type: "auto",
      });
      req.body.images_post = result.url;
      console.log(req.body.images_post);
    } catch (err) {
      console.log(err);
      res.status(err.status || 500).json({ message: err.message });
    }
    try {
      await addPostsQuery(req.body, id);

      return res.status(201).json({
        message: "Post and Image  Add Success",
      });
    } catch (err) {
      console.log(err);
      res.status(err.status || 500).json({ message: err.message });
    }
  } else {
    console.log("not here");
    try {
      await addPostsQuery(req.body, id);

      return res.status(201).json({
        message: "Post Add Success",
      });
    } catch (err) {
      console.log(err);
      res.status(err.status || 500).json({ message: err.message });
    }
  }
};

export default addPosts;
