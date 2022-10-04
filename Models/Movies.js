const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const MovieSchema = mongoose.Schema(
  {
    movieName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    information: {
      type: String,
    },
    poster: {
      type: String,
    },
    reviews: [
      {
        type: ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
