const express = require("express");
const connectDB = require("../../oneMore/config/db_config");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome the server api",
  });
});

app.use("/api/product", require("../Routes/route"));

app.listen(PORT, (req, res) => {
  console.log(`Server is runnig on ${PORT}`);
});
