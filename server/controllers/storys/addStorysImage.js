// addStorysImage
import { addStorysImageQuery } from "../../queries/storys/index.js";
import { v2 as cloudinary } from "cloudinary";

const addStorysImage = async (req, res, next) => {
  const file = req.file;
  const { id } = req.user;
  if (req.file === undefined) {
   return;
  } else {
    cloudinary.config({
      cloud_name: "dylk90sig",
      api_key: "918692263246299",
      api_secret: "30GBpoZsa-MH5LmVBnUOCPX1P4I",
    });
    const result = await cloudinary.uploader.upload(file.path);
    const imageUrl = result.secure_url;
    try {
      await addStorysImageQuery({ image: imageUrl }, id);
      return res.status(201).json({
        message: "Story Add Success",
      });
    } catch (err) {
      res.status(err.status || 500).json({ message: err.message });
    }
  }
};

export default addStorysImage;
