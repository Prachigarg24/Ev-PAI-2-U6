const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/quizquest");
    console.log(" MongoDB connected");
  } catch (err) {
    console.error(" MongoDB connection failed:", err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;