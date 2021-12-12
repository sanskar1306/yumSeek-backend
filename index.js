const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const routes = require("./routes/index.routes.js");
const mongoose = require("mongoose");

require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
mongoose.connect(process.env.MONGODB_URL , { useNewUrlParser: true  });
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use("/", routes);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});


module.exports = app;