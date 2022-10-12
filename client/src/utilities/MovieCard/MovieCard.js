import React from "react";
import Card from "react-bootstrap/Card";

function MovieCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cps-static.rovicorp.com/2/Open/Turner%20Classic%20Movies/The%20Treasure%20of%20the%20Sierra%20Madre/_derived_jpg_q90_500x500_m0/TreasureOfTheSierraMadre_PosterArt1.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
