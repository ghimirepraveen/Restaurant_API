const express = require("express");
const food_Router = express.Router();
const getFood = require("./getfood/getfood");
const postFood = require("./postfood/postfood");
const auth = require("../../handeler/middleware/auth");
food_Router.get("/menu", getFood);
food_Router.use(auth);
food_Router.post("/addfood", postFood);

module.exports = food_Router;
