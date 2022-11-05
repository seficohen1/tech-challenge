import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import {
  CategoryRouter,
  FileRouter,
  UserRouter,
  SearchRouter,
} from "./src/routes/index.js";
import ErrorHandler from "./src/middlewares/ErrorHandler.js";

const { json } = bodyParser;

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(
  json({
    limit: "50mb",
  }),
);
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Routers
app.use(CategoryRouter);
app.use(FileRouter);
app.use(UserRouter);
app.use(SearchRouter);

// Error Middleware
app.use(ErrorHandler);

export default app;
