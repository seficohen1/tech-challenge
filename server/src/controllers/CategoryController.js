import { CategoryModel } from "../models/index.js";

// Create categorty

const createCategory = async (req, res, next) => {
  const { type } = req.body;

  try {
    const categorty = await CategoryModel.create({ type });

    res.status(201).send({ success: true, data: categorty });
  } catch (error) {
    next(error);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await CategoryModel.find({}).populate({ path: "files" });

    res.status(201).send({ success: true, data: categories });
  } catch (error) {
    next(error);
  }
};
const getCategoryById = async (req, res, next) => {
  const { id: categoryId } = req.params;
  try {
    const categorty = await CategoryModel.findById({
      _id: categoryId,
    }).populate({
      path: "files",
      select: ["fileUrl", "title", "tag"],
    });

    res.status(201).send({ success: true, data: categorty });
  } catch (error) {
    next(error);
  }
};

export { createCategory, getAllCategories, getCategoryById };
