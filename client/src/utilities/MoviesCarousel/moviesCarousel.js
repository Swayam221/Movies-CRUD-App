import React from "react";
import Carousel from "react-bootstrap/Carousel";

function MoviesCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/1064045/15061/i/600/depositphotos_150614902-stock-photo-unusual-cinema-concept-3d-illustration.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/1064045/15061/i/600/depositphotos_150614902-stock-photo-unusual-cinema-concept-3d-illustration.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/1064045/15061/i/600/depositphotos_150614902-stock-photo-unusual-cinema-concept-3d-illustration.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MoviesCarousel;
