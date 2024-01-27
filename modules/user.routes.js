const express = require("express");
const user_Router = express.Router();
const userlogin = require("./userlogin/userlogin");
const regesteration = require("./userregisteration/registeration");

user_Router.post("/login", userlogin);
user_Router.post("/regesteration", regesteration);

module.exports = user_Router;
