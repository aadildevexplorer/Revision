const expressAsyncHandler = require("express-async-handler");
const User = require("../model/userModel");

const createUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  // Validation
  if (!name || !email || !password || !isAdmin) {
    res.status(400);
    throw new Error("Please fill all details");
  }

  const user = new User(req.body);
  await user.save();

  if (!user) {
    res.status(500).json({ msg: "User not found" });
  } else {
    res.status(201).json({ user: user, success: true });
  }
});

const deleteUser = expressAsyncHandler(async (req, res) => {
  const remove = await User.findByIdAndDelete(req.params.id);
  if (!remove) {
    res.status(404).json({ msg: "User deleted" });
  }
});

const updateUser = expressAsyncHandler(async (req, res) => {
  const update = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!update) {
    res.status(404).json({ msg: "User not edited" });
  } else {
    res.status(200).json({ update: update, success: true });
  }
});

module.exports = { createUser, deleteUser, updateUser };
