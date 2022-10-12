import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

function MovieCard(data) {
  const navigate = useNavigate();
  return (
    // <Link to={`${data.data.movieName}`}>
    <Card
      onClick={() => {
        navigate(`${data.data.movieName}`, { replace: true }, [navigate]);
      }}
      style={{
        width: "18rem",
        margin: "auto",
        height: "32rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        cursor: "pointer",
      }}
    >
      <Card.Img variant="top" src={data.data.poster} />
      <Card.Body>
        <Card.Title>{data.data.movieName}</Card.Title>
        <Card.Text
          style={{
            // whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "....",
            // width: "100px",
            height: "70px",
          }}
        >
          {data.data.information}
        </Card.Text>
      </Card.Body>
    </Card>
    // </Link>
  );
}

export default MovieCard;
