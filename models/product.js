const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must be provided"],
  },

  featured: {
    type: Boolean,
    default: false,
  },

  rating: {
    type: Boolean,
    default: 5,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  company: {
    type: String,
    enum: {
      values: ["apple", "lenovo", "dell"],
      message: `{VALUE} is not supported`,
    },
  },
});

var rr = new mongoose.model("Product", productSchema);

module.exports = rr
