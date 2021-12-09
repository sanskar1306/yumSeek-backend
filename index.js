const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/users.js");
const restaurantRoute = require("./routes/restaurant.js");
require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL , { useNewUrlParser: true  });
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use("/api/users",userRoute);
app.use("/api/restaurantUser",restaurantRoute);
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});


module.exports = app;