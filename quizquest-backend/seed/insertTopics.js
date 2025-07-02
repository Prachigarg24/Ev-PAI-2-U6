const mongoose = require("mongoose");
const Topic = require("../models/topic.model"); 

mongoose.connect("mongodb://127.0.0.1:27017/quizquest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected");

    return Topic.insertMany([
      { name: "JavaScript Basics", difficulty: "Easy" },
      { name: "React JS", difficulty: "Medium" },
      { name: "Node.js", difficulty: "Medium" },
      { name: "MongoDB", difficulty: "Easy" }
    ]);
  })
  .then(() => {
    console.log("Topics inserted ");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error inserting topics:", err);
  });