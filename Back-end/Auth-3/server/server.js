const express = require("express");
const db = require("./db/db");
require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(cors());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

db();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the Auth API");
});

app.use("/api/user", require("./routes/userRoute"));
app.use("/api/admin", require("./routes/adminRoute"));
app.use("/api/user/crud", require("./routes/crudRoute"));

app.use(errorHandler);
app.listen(PORT, (req, res) => {
  console.log(`server running on ${PORT}`);
});
