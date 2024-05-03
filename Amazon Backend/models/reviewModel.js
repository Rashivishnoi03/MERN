const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  reviewerName: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const reviewModel = mongoose.model("Review", reviewSchema);

module.exports = reviewModel;