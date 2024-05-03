const reviewModel = require("../models/reviewModel");

const getAllReviews = async (req, res) => {
  try {
    const reviews = await reviewModel.find();
    res.json({
      status: "success",
      results: reviews.length,
      data: {
        reviews: reviews,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "An error occurred while fetching reviews",
    });
  }
};

const addReview = async (req, res) => {
  try {
    const newReview = await reviewModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        review: newReview,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};

const updateReview = async (req, res) => {
  try {
    const updatedReview = await reviewModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        review: updatedReview,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    await reviewModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Invalid review id",
    });
  }
};

module.exports = {
  getAllReviews,
  addReview,
  updateReview,
  deleteReview,
};