// addStorysImage
import { addStorysImageQuery } from "../../queries/storys/index.js";
import { v2 as cloudinary } from "cloudinary";

const addStorysImage = async (req, res, next) => {
  const file = req.file;
  const { id } = req.user;
  console.log(req.file, "req.file");
  if (req.file === undefined) {
    console.log('add image');
  } else {
    console.log('sss');
    cloudinary.config({
      cloud_name: "dylk90sig",
      api_key: "918692263246299",
      api_secret: "30GBpoZsa-MH5LmVBnUOCPX1P4I",
    });
    const result = await cloudinary.uploader.upload(file.path);
    const imageUrl = result.secure_url;
    console.log(imageUrl);
    try {
      await addStorysImageQuery({ image: imageUrl }, id);
      return res.status(201).json({
        message: "Story and Image Add Success",
      });
    } catch (err) {
      res.status(err.status || 500).json({ message: err.message });
    }
  }
};

export default addStorysImage;
