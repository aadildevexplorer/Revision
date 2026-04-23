const express = require("express");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

connectDB();
app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to the Crud API",
  });
});

app.use("/api/blog", require("./route/blogRoute"));

app.listen(PORT, (req, res) => {
  console.log(`http://localost:${PORT}`);
});
