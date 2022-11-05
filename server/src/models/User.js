import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  avatar: {
    type: String,
  },
  myFiles: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "file",
    },
  ],
});

const UserModel = new mongoose.model("user", UserSchema);

export default UserModel;
