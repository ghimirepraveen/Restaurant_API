const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  fname: {
    type: String,
    unique: [true, "Food name should not be repeated"],
    required: [true, " food name is required"],
  },
  price: {
    type: Number,
    required: [true, " price is required"],
  },
  ingredient: {
    type: String,
    //required: [true, " ingredient is required"],
  },
  rating: {
    type: Number,
    min: [0, "value shouls be more than 0"],
    max: [10, "value should be less than 10 "],
  },

  quantity: {
    type: Number,
    min: [0, "value shouls be more than 0"],
    max: [10, "value should be less than 10 "],
    // required: [true, " quantity  is required"],
  },
  additional_instruction: {
    type: String,
  },
});
const foodModel = mongoose.model("food", foodSchema);
module.exports = foodModel;
