import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import SingleReview from "../../utilities/SingleReview/SingleReview";

import { GET_SINGLE_MOVIE, ADD_REVIEW } from "../../utilities/BackendLink";

function MoviePage() {
  const params = useParams();
  // console.log(params);
  const [movieFound, setMovieFound] = useState(false);
  const [movieData, setMovieData] = useState({});

  const [readMore, setReadMore] = useState(false);
  const [reviewData, setReviewData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        GET_SINGLE_MOVIE + params.movieName
      ).then((res) => res.json());

      if (result.isError) {
        setMovieFound(false);
      } else {
        setMovieFound(true);
        setMovieData(result._doc);
        // console.log(result._doc);
      }
    };

    fetchData();
  }, []);

  if (!movieFound) {
    return (
      <div>
        <h1>No Movie found</h1>
      </div>
    );
  }

  const onReviewChange = (e) => {
    setReviewData(e.target.value);
  };

  const addReview = async () => {
    const result = await fetch(ADD_REVIEW, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: reviewData,
        rating: Math.round(Math.random(5) * 10) % 5,
        movieId: movieData._id,
      }),
    }).then((res) => res.json());

    if (!result.isError) {
      setMovieData(result._doc);
      setReviewData("");
    }
  };

  return (
    <div style={{ margin: "auto" }}>
      <Card style={{ width: "35rem", margin: "auto" }}>
        <Card.Img variant="top" src={movieData.poster} />
        <Card.Body>
          <Card.Title>{movieData.movieName}</Card.Title>
          <Card.Text>
            {readMore
              ? movieData.information
              : movieData.information.slice(0, 200)}
            <span
              onClick={() => {
                setReadMore((s) => !s);
              }}
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
                marginLeft: "2px",
              }}
            >
              {readMore ? " ... read less" : " ...read more"}
            </span>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text style={{ fontSize: "x-large" }}>Reviews</Card.Text>
          {movieData.reviews.map((reviewData) => {
            return (
              <div key={reviewData._id}>
                <SingleReview data={reviewData} />
              </div>
            );
          })}
          <hr />
          <Form style={{ marginTop: "10px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Add a review"
                onChange={onReviewChange}
                value={reviewData}
              />
            </Form.Group>
            <Button variant="primary" onClick={addReview}>
              Add Review
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MoviePage;
