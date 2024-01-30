const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " food name is required"],
  },

  foodname: {
    type: String,
    unique: [true, "Food name should not be repeated"],
    required: [true, " food name is required"],
  },
  // price: {
  //   type: Number,
  //   required: [true, " price is required"],
  // },

  quantity: {
    type: Number,
    min: [0, "value shouls be more than 0"],
    max: [10, "value should be less than 10 "],
    required: [true, " quantity  is required"],
  },
  additional_instruction: {
    type: String,
  },
});
const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;
