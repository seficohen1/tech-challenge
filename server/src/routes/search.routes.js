import express from "express";
import { search } from "../controllers/index.js";

const Router = express.Router;

const SearchRouter = Router();

SearchRouter.get("/search", search);

export default SearchRouter;
