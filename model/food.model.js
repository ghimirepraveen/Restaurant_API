const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, " food name is required"],
  },
  price: {
    type: String,
    required: [true, " price is required"],
  },
  ingredient: {
    type: String,
    required: [true, " ingredient is required"],
  },

  rating: {
    type: Number,
  },
});
const foodModel = mongoose.model("food", foodSchema);
module.exports = foodModel;
