const express = require("express");
const connectDB = require("./config/db_config");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
connectDB();

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to the Server api",
  });
});

app.use("/api/products", require("./routes/product"));
app.use(errorHandler);

app.listen(PORT, (req, res) => {
  console.log(`server is running on PORT : ${PORT}`);
});
