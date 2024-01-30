const express = require("express");
const user_Router = express.Router();
const logincostumer = require("./userlogin/logincustomer");
const loginmanager = require("./userlogin/loginmanager");
const regesteration = require("./userregisteration/registeration");

user_Router.post("/login/costumer", logincostumer);
user_Router.post("/login/manager", loginmanager);
user_Router.post("/regesteration", regesteration);

module.exports = user_Router;
