const mongooes = require("mongoose");

const foodSchema = new mongooes.Schema({
  fname: {
    type: String,
    required: [true, " food name is required"],
  },
  Price: {
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
