import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
} from "../controllers/index.js";

const Router = express.Router;

const CategoryRouter = Router();

CategoryRouter.post("/category", createCategory);
CategoryRouter.get("/categories", getAllCategories);
CategoryRouter.get("/category/:id", getCategoryById);

export default CategoryRouter;
