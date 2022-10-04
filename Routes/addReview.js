const express = require("express");
const router = express.Router();

const Movie = require("../Models/Movies");
const Review = require("../Models/Review");

// POST REQUEST

// router.post("/", async (req, res) => {

// LOGIC:
// create a new review object and store it in database
// now add this review to corresponding movie's review array
// when fetching the movie details, then expand the reviews
// pawrrrryyyy!!!!

//   try {
//     const reviewToAdd = new Review({
//       movieName: req.body.movieName,
//       category: req.body.category,
//       information: req.body.information,
//       poster: req.body.poster,
//     });

//     const savedMovie = await reviewToAdd.save();

//     res.status(200).json(savedMovie);
//     console.log("movie saved successfully");
//   } catch (err) {
//     res.json({ message: err });
//     console.log(err);
//   }
// });

module.exports = router;
