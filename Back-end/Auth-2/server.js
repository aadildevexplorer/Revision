const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const rateLimit = require("express-rate-limit");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 2,
  message: "Too many requests , try again later",
});

connectDB();
app.get("/", (req, res) => {
  res.send({ msg: "Welcome to Auth Api 1.0" });
});

app.get("/api/test", limiter, (req, res) => {
  res.send("API working");
});

app.use("/api/auth/user", require("./route/userRoute"));

// app.use("/api", limiter);
app.use(errorHandler);
app.listen(PORT, (req, res) => {
  console.log(`server is running on ${PORT}`);
});
