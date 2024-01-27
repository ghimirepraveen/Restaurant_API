const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const user_Route = require("./modules/user.routes");
dotenv.config();

const app = express();
app.use(express.json());
require("./model/userlogin.model");
mongoose
  .connect(process.env.DB, {})
  .then(() => {
    console.log("server connected sucessful");
  })
  .catch((e) => {
    console.log("Cannot connect to Database");
  });
app.use("/users", user_Route);
app.listen(process.env.port, () => {
  console.log(`listening to port ${process.env.port}`);
});
