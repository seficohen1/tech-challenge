import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  type: {
    type: String,
    require: true,
    enum: ["gif", "meme"],
  },
  files: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "file",
    },
  ],
});

const CategoryModel = new mongoose.model("category", CategorySchema);

export default CategoryModel;
