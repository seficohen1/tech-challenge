import { FileModel } from "../models/index.js";
import { CategoryModel } from "../models/index.js";
import { UserModel } from "../models/index.js";
import cloudinary from "../utils/cloudinary.js";

//  Create Gif or Meme

const createFile = async (req, res, next) => {
  const { path } = req.file;
  const { tag, title } = req.body;
  const fileType = req.file.mimetype.split("/")[1] === "gif" ? "gif" : "meme";
  try {
    // create file in cloudinary
    const createdFileInCloudinary = await cloudinary.uploader.upload(path, {
      folder: "songs",
      resource_type: "image",
    });

    // look for category

    const category = await CategoryModel.find({ type: fileType });

    // create file in DB
    const createdFileInDB = await FileModel.create({
      fileUrl: createdFileInCloudinary.url,
      title,
      // user: userId,
      tag,
      category: category[0]._id,
    });

    // update category db

    const updatedCategory = await CategoryModel.findOneAndUpdate(
      { _id: category[0]._id },
      { $addToSet: { files: createdFileInDB._id } },
      { new: true },
    );

    // const updateUser = await UserModel.findOneAndUpdate(
    //   { _id: userId },
    //   { $addToSet: { myFiles: createdFileInDB._id } },
    //   { new: true },
    // );

    res.status(201).send({
      success: true,
      data: {
        fileUrl: createdFileInDB.fileUrl,
        title: createdFileInDB.title,
        fileType,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deleteFile = async (req, res, next) => {
  const { id: fileId } = req.params;

  try {
    const fileToDelete = await FileModel.findByIdAndDelete({ _id: fileId });
    res.status(200).send({ success: true, message: "file was deleted" });
  } catch (error) {
    next(error);
  }
};

const getAllFiles = async (req, res, next) => {
  try {
    const files = await FileModel.find({})
      .populate({
        path: "user",
        select: "username",
      })
      .lean()
      .exec();

    res.status(200).send({ data: files });
  } catch (error) {
    next(error);
  }
};

const getFilesById = async (req, res, next) => {
  const { id: fileId } = req.params;

  try {
    const files = await FileModel.findById({ _id: fileId })
      .populate({
        path: "user",
        select: "username",
      })
      .populate({
        path: "category",
        select: "type",
      });
    res.status(200).send({ success: true, data: { files } });
  } catch (error) {
    next(error);
  }
};

export { createFile, deleteFile, getAllFiles, getFilesById };
