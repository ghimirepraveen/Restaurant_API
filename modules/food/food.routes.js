const express = require("express");
const food_Router = express.Router();
const userlogin = require("./userlogin/userlogin");
const regesteration = require("./userregisteration/registeration");

user_Router.get("/menu", userlogin);
user_Router.post("/addfood", regesteration);

module.exports = food_Router;
