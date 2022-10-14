import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import MovieCard from "../../utilities/MovieCard/MovieCard";

import { GET_ALL_MOVIES } from "../../utilities/BackendLink";

function List() {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(GET_ALL_MOVIES).then((res) => res.json());
      setMoviesList(result);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Row lg={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
        {moviesList.map((movie, index) => {
          return <MovieCard data={movie} key={movie._id} />;
        })}
      </Row>
    </Container>
  );
}

export default List;
