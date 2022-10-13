const express = require("express");
const router = express.Router();

const Movie = require("../Models/Movies");
const Review = require("../Models/Review");

// POST REQUEST

router.put("/", async (req, res) => {
  // LOGIC:
  // create a new review object and store it in database
  // now add this review to corresponding movie's review array
  // when fetching the movie details, then expand the reviews
  // pawrrrryyyy!!!!

  try {
    const reviewToAdd = new Review({
      content: req.body.content,
      rating: req.body.rating,
      movieId: req.body.movieId,
    });

    const savedReview = await reviewToAdd.save();
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: req.body.movieId },
      {
        $push: { reviews: savedReview._id },
      },
      { new: true }
    ).populate("reviews");

    res.status(200).json({ ...updatedMovie, isError: false });
    console.log("movie saved successfully");
  } catch (err) {
    res.json({ message: err, isError: true });
    console.log(err);
  }
});

module.exports = router;
