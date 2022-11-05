import { UserModel } from "../models/index.js";

// Creating user

const createUser = async (req, res, next) => {
  const { firstName, lastName, username } = req.body;

  try {
    const user = await UserModel.create({ firstName, lastName, username });

    res.status(201).send({ user });
  } catch (error) {
    next(error);
  }
};

// Getting current user - mocking logged in user

const getCurrentUser = async (req, res, next) => {
  try {
    const user = await UserModel.find({}).populate({ path: "myFiles" });
    if (user.length === 0) {
      res.status(404).send("there are no users in db, please seed");
    }

    res.status(200).send({ success: true, data: user[0] });
  } catch (error) {
    next(error);
  }
};

export { createUser, getCurrentUser };
