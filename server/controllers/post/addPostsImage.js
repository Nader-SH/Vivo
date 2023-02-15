import { addPostsImageQuery ,addPostsQuery} from "../../queries/post/index.js";
import { v2 as cloudinary } from "cloudinary";

const addPostsImage = async (req, res, next) => {
  const { text } = req.body;
  const file = req.file;
  const { id } = req.user;
  if (!file) {
    try {
      await addPostsImageQuery({ text_post: text }, id);
      return res.status(201).json({
        message: "Post Add Success",
      });
    } catch (err) {
      res.status(err.status || 500).json({ message: err.message });
    }
  } else {
    cloudinary.config({
      cloud_name: "dylk90sig",
      api_key: "918692263246299",
      api_secret: "30GBpoZsa-MH5LmVBnUOCPX1P4I",
    });
    const result = await cloudinary.uploader.upload(file.path);
    const imageUrl = result.secure_url;
    try {
      await addPostsImageQuery({ images_post: imageUrl, text_post: text }, id);
      return res.status(201).json({
        message: "Post and Image Add Success",
      });
    } catch (err) {
      res.status(err.status || 500).json({ message: err.message });
    }
  }
};

export default addPostsImage;
