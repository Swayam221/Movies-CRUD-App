const express = require("express");
const router = express.Router();

const Movie = require("../Models/Movies");

// GET REQUEST

router.get("/", async (req, res) => {
  try {
    const result = await Movie.find();
    res.status(200).json(result);
  } catch (err) {
    res.json({ message: err.message });
    console.log(err);
  }
});

router.get("/byName/:movieToSearch", async (req, res) => {
  try {
    const movieToSearch = req.params.movieToSearch;
    const result = await Movie.findOne({ movieName: movieToSearch }).populate(
      "reviews"
    );
    if (!result) throw new Error("No Movie found");

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
});

module.exports = router;
