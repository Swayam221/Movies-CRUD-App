import React from "react";
import Carousel from "react-bootstrap/Carousel";

function MoviesCarousel() {
  const posterLinks = [
    "https://cps-static.rovicorp.com/2/Open/Turner%20Classic%20Movies/The%20Treasure%20of%20the%20Sierra%20Madre/_derived_jpg_q90_500x500_m0/TreasureOfTheSierraMadre_PosterArt1.jpg",
    "https://cps-static.rovicorp.com/2/Open/CinemaSource/Indiana%20Jones%20and%20The%20Raiders%20of%20the%20Lost%20Ark%20%20The%20IMAX%20Experience/_derived_jpg_q90_600x800_m0/140449R1_CR.jpg",
    "https://cps-static.rovicorp.com/2/Open/20th%20Century%20Fox/Die%20Hard/_derived_jpg_q90_500x500_m0/DieHard-PosterArt.jpg",
    "https://cps-static.rovicorp.com/2/Open/20th_Century_Fox_39/Program/24045357/_derived_jpg_q90_500x500_m0/Revenant_1536x2048.jpg",
    "https://cps-static.rovicorp.com/2/Open/Sony%20Pictures/Skyfall/_derived_jpg_q90_500x500_m0/SKYFAL_KATOS_0002.jpg",
    "https://cps-static.rovicorp.com/2/Open/Warner%20Brothers%20Distribution/Movies/The%20Dark%20Knight/_derived_jpg_q90_500x500_m0/TheDarkKnight-BatmanPosterArt1CR.jpg",
  ];

  return (
    <Carousel style={{ width: "80%", height: "700px", margin: "auto" }}>
      {posterLinks.map((link, index) => {
        return (
          <Carousel.Item interval={1000} key={index}>
            <img className="d-block w-100" src={link} height="700" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default MoviesCarousel;
