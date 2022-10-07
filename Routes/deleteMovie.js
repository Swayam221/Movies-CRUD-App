const express = require("express");
const router = express.Router();

const Movie = require("../Models/Movies");

// DELETE REQUEST

router.delete("/:movieId", async (req, res) => {
  try {
    const removedMovie = await Movie.findOneAndDelete({
      _id: req.params.movieId,
    });
    res.status(200).json(removedMovie);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: "No movies found to be deleted" });
  }
});

module.exports = router;
