import React, { useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";

import { ADD_MOVIES } from "../../utilities/BackendLink";

function AddMovies() {
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [poster, setPoster] = useState("");
  const [category, setCategory] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setshowResult] = useState(false);

  const onMovieNameChange = useCallback(
    (e) => {
      setMovieName(e.target.value);
    },
    [movieName]
  );

  const onMovieDescriptionChange = useCallback(
    (e) => {
      setMovieDescription(e.target.value);
    },
    [movieDescription]
  );

  const onPosterValueChange = useCallback(
    (e) => {
      setPoster(e.target.value);
    },
    [poster]
  );

  const onCategoryChange = useCallback(
    (e) => {
      setCategory(e.target.value);
    },
    [category]
  );

  const addMovie = useCallback(async () => {
    const result = await fetch(ADD_MOVIES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movieName: movieName,
        category: category,
        information: movieDescription,
        poster: poster,
      }),
    }).then((res) => res.json());
    setshowResult(true);

    if (result.isError) {
      setResult("There is some error");
    } else {
      setResult("Movie added successfully");
    }

    console.log(result);
  }, [movieName, category, poster, movieDescription]);

  return (
    <Form className="w-50" style={{ margin: "auto" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Movie name"
          onChange={onMovieNameChange}
          value={movieName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Movie category"
          onChange={onCategoryChange}
          value={category}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter movie description"
          onChange={onMovieDescriptionChange}
          value={movieDescription}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Poster</Form.Label>
        <Form.Control
          type="text"
          placeholder="Poster URL"
          onChange={onPosterValueChange}
          value={poster}
        />
      </Form.Group>
      <Toast
        onClose={() => setshowResult(false)}
        show={showResult}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Movies</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>{result}</Toast.Body>
      </Toast>
      <Button variant="primary" onClick={addMovie}>
        Submit
      </Button>
    </Form>
  );
}

export default AddMovies;
