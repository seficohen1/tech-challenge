import mongoose from "mongoose";

const FileSchema = mongoose.Schema({
  fileUrl: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "category",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
});

const FileModel = new mongoose.model("file", FileSchema);

export default FileModel;
