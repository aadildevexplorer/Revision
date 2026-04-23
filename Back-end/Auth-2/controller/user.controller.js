const expressAsyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const generateToken = require("../utils/token");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(404).json({ msg: "All fields are required" });
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(409).json({
      success: false,
      msg: "User Already Exist",
    });
  }

  const user = await User.create({
    name: name,
    email: email,
    password: password,
  });

  if (!user) {
    res.status(404).json({ msg: "User not found" });
  }
  res.status(201).json({
    success: true,
    message: "Registration Successfully",
    name: user?.name,
    email: user?.email,
    password: user?.password,
    id: user?.id,
    token: generateToken(user._id),
  });
});

const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404).json({ msg: "All fields are required" });
  }

  const user = await User.findOne({ email });

  if (user) {
    res.status(201).json({
      success: true,
      message: "Login Successfully",
      name: user?.name,
      email: user?.email,
      id: user?.id,
      token: generateToken(user._id),
    });
  } else {
    res.status(404).json({ error: "Invalid Credential" });
  }
});

module.exports = { registerUser , loginUser};
