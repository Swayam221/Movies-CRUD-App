import React from "react";
import Stars from "../Stars/Stars";

function SingleReview(data) {
  const time = new Date(data.data.createdAt);
  const timeToDisplay =
    time.toDateString() +
    " " +
    time.toLocaleTimeString().slice(0, 5) +
    time.toLocaleTimeString().slice(8, 11);
  return (
    <div style={{ marginTop: "5px" }}>
      <div>
        <span style={{ fontSize: "small" }}>
          {timeToDisplay} <Stars number={data.data.rating} />
        </span>
      </div>
      <div>{data.data.content}</div>
    </div>
  );
}

export default SingleReview;
