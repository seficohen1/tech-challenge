import express from "express";
import { createUser, getCurrentUser } from "../controllers/index.js";

const Router = express.Router;

const UserRouter = Router();

UserRouter.get("/users", getCurrentUser);
UserRouter.get("/users/:id");
UserRouter.post("/users", createUser);

export default UserRouter;
