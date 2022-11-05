import mongoose from "mongoose";

// * Connection to local DB
const connectDB = () => {
  return mongoose.connect("mongodb://localhost:27017/fullstackchallenge");
};

export default connectDB;
