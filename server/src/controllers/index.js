import {
  createCategory,
  getAllCategories,
  getCategoryById,
} from "./CategoryController.js";
import {
  createFile,
  deleteFile,
  getAllFiles,
  getFilesById,
} from "./FileController.js";
import { createUser, getCurrentUser } from "./UserController.js";
import search from "./SearchController.js";

// User controller
export { createUser, getCurrentUser };

// File controller
export { createFile, deleteFile, getAllFiles, getFilesById };

// Category controller
export { createCategory, getAllCategories, getCategoryById };

// Search controller
export { search };
