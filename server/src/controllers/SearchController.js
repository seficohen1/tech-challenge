import { FileModel, UserModel } from "../models/index.js";

const search = async (req, res, next) => {
  const { query } = req.query;

  try {
    const resultsByTitle = await FileModel.find({
      title: { $regex: query, $options: "i" },
    });

    const resultsByTags = await FileModel.find({
      tag: { $regex: query, $options: "i" },
    });

    const resultsByUser = await UserModel.find({
      username: { $regex: query, $options: "i" },
    }).populate({
      path: "myFiles",
      select: ["fileUrl", "title", "tag"],
    });

    res
      .status(200)
      .send({ data: { resultsByTitle, resultsByTags, resultsByUser } });
  } catch (error) {
    next();
  }
};

export default search;
