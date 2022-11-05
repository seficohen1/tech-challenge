import express from "express";
import {
  createFile,
  deleteFile,
  getAllFiles,
  getFilesById,
} from "../controllers/index.js";
import { upload } from "../utils/cloudinary.js";

const Router = express.Router;

const FileRouter = Router();

FileRouter.get("/files", getAllFiles);
FileRouter.get("/file/:id", getFilesById);
FileRouter.post("/files", upload.single("image"), createFile);
FileRouter.delete("/files/:id", deleteFile);

export default FileRouter;
