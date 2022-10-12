import React from "react";
import Carousel from "react-bootstrap/Carousel";

function MoviesCarousel() {
  return (
    <Carousel style={{ width: "80%", height: "700px", margin: "auto" }}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cps-static.rovicorp.com/2/Open/Turner%20Classic%20Movies/The%20Treasure%20of%20the%20Sierra%20Madre/_derived_jpg_q90_500x500_m0/TreasureOfTheSierraMadre_PosterArt1.jpg"
          alt="The Treasure of the Sierra Madre"
          height="700"
          // width="100"
        />
        <Carousel.Caption>
          <h3>The Treasure of the Sierra Madre</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cps-static.rovicorp.com/2/Open/CinemaSource/Indiana%20Jones%20and%20The%20Raiders%20of%20the%20Lost%20Ark%20%20The%20IMAX%20Experience/_derived_jpg_q90_600x800_m0/140449R1_CR.jpg"
          alt="Raiders of the Lost Ark"
          height={700}
        />
        <Carousel.Caption>
          <h3>Raiders of the Lost Ark</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MoviesCarousel;
