import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MovieCard from "../../utilities/MovieCard/MovieCard";

import { GET_ALL_MOVIES } from "../../utilities/BackendLink";

function List() {
  // useEffect(() => {
  //   fetch(GET_ALL_MOVIES)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return (
    <Container>
      <Row lg={4} md={3} sm={2} xs={1}>
        <Col>
          <MovieCard />
        </Col>
        {/* <Col>2</Col>
        <Col>3</Col>
        <Col>4</Col>
        <Col>5</Col>
        <Col>6</Col>
        <Col>7</Col>
        <Col>8</Col>
        <Col>9</Col>
        <Col>10</Col>
        <Col>11</Col>
        <Col>12</Col>
        <Col>13</Col>
        <Col>14</Col>
        <Col>15</Col>
        <Col>16</Col> */}
      </Row>
    </Container>
  );
}

export default List;
