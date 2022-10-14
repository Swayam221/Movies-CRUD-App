const express = require("express");
const router = express.Router();

const Movie = require("../Models/Movies");

// POST REQUEST

router.post("/", async (req, res) => {
  // console.log(req.body);
  try {
    const movieToAdd = new Movie({
      movieName: req.body.movieName,
      category: req.body.category,
      information: req.body.information,
      poster: req.body.poster,
    });

    const savedMovie = await movieToAdd.save();
    res.status(200).json({ ...savedMovie, isError: false });
    console.log("movie saved successfully");
  } catch (err) {
    res.json({ message: err.message, isError: true });
    console.log(err);
  }
});

module.exports = router;
