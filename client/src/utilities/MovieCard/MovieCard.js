import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function MovieCard(data) {
  const navigate = useNavigate();
  return (
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
            overflow: "hidden",
            textOverflow: "....",
            height: "70px",
          }}
        >
          {data.data.information}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
