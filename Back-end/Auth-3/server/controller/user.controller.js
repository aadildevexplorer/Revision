const expressAsyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// ================= REGISTER USER =================

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all details");
  }

  // Check existing user
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // Response
  res.status(201).json({
    success: true,
    message: user.isAdmin ? "Admin Register Successful" : "Register Successful",

    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
});

// ================= LOGIN USER =================

const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill all details");
  }

  // Find user
  const user = await User.findOne({ email });

  // Check password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      success: true,
      message: user.isAdmin ? "Admin Login Successful" : "Login Successful",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});

// ================= GENERATE TOKEN =================

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

// ================= EXPORTS =================

module.exports = {
  registerUser,
  loginUser,
};
