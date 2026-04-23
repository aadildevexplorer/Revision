const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB CONNECT", conn.connection);
  } catch (error) {
    console.log("DB FAILFD", conn.connection.error);
  }
};

module.exports = connectDB;
