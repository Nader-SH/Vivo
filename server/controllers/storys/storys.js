import { getStorysQuery, timeStoryQuery} from "../../queries/storys/index.js";

const getStorys = async (req, res, next) => {
  const page  = req.query.page;
  await timeStoryQuery();
  try {
    const allStorys = await getStorysQuery(page);
    return res.status(201).json(allStorys);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export default getStorys;
