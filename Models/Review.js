const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
