const expressAsyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const getAllUser = expressAsyncHandler(async (req, res) => {
  const users = await User.find();

  if (!users) {
    res.status(404);
    throw new Error("Users Not Found");
  }
  res.status(200).json(users);
});

module.exports = getAllUser;
