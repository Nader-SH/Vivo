import { deleteStorysQuery } from "../../queries/storys/index.js";

const deleteStorys = async (req, res, next) => {
  const { id } = req.user;
  try {
    await deleteStorysQuery(req.body.id, id);

    return res.status(201).json({
      message: "Delete Story Success",
    });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export default deleteStorys;
