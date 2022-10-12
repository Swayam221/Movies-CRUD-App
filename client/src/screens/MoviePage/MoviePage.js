import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GET_SINGLE_MOVIE } from "../../utilities/BackendLink";

function MoviePage() {
  const params = useParams();
  console.log(params);
  const [movieFound, setMovieFound] = useState(false);
  const [movieData, setMovieData] = useState({});

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
        // console.log(result);
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

  return <div>{movieData.movieName}</div>;
}

export default MoviePage;
