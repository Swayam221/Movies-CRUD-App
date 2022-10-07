const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const ReviewSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    movieId: {
      type: ObjectId,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
