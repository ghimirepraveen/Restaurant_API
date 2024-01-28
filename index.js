const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const user_Route = require("./modules/user/user.routes");
const food_Route = require("./modules/food/food.routes");
dotenv.config();

const app = express();
require("./model/food.model");
require("./model/userlogin.model");
app.use(express.json());
require("./model/userlogin.model");
//console.log(process.env.DB);
mongoose
  .connect(process.env.DB, {})
  .then(() => {
    console.log("Database connected sucessful");
  })
  .catch((e) => {
    console.log("Cannot connect to Database");
  });
app.use("/users", user_Route);
app.use("/food", food_Route);
app.listen(process.env.port, () => {
  console.log(`listening to port ${process.env.port}`);
});
