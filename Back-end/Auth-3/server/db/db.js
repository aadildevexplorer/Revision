const mongoose = require("mongoose");

const db = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connect" , conn.connection.name);
  } catch (error) {
    console.log("DB Failed" , error);
  }
};

module.exports = db;
