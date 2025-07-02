const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();


app.use(cors({
  origin: "http://localhost:5174", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use("/api/login", require("./routes/login"));
app.use("/api/topics", require("./routes/topics"));
app.use("/api/questions", require("./routes/questions"));
app.use("/api/attempts", require("./routes/attempts"));


connectDB();


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});