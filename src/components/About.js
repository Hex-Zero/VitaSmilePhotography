import React, { useState } from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { aboutContent, aboutContent2 } from "../assets/contentTXT/aboutContent";
import Carousel from "react-bootstrap/Carousel";
import back from "../assets/back.jpg";
import stars from "../assets/5stars.png";
import {
  Dovile,
  Carly,
  Ale,
  Jurga,
  Sue,
  Sky,
  Dan,
  Eva
} from "../assets/contentTXT/PeopleSay";
import uuid from "uuid";
const About = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [comentArray] = useState([
    Dovile,
    Carly,
    Ale,
    Jurga,
    Sue,
    Sky,
    Dan,
    Eva
  ]);
  const [names] = useState([
    "Dovilė Valčiukienė",
    "Carly Chaffe",
    "Ale Gorciu",
    "Jurga Matulaitytė Ivaškina",
    "Sue Greenwood",
    "Sky Florence Rosie Klawinska",
    "Dan Gutteridge",
    "Eva Rothwell"
  ]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  console.log(comentArray);
  return (
    <Styled>
      <Card>
        <Card.Body>
          <Card.Title>Family Run Photography Business</Card.Title>
          <Card.Text>{aboutContent}</Card.Text>
          <Card.Title>What My Customers Say About Me</Card.Title>
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
          >
            {comentArray.map((current, i) => {
              return (
                <Carousel.Item key={uuid()}>
                  <img className="d-block w-100" src={back} alt="First slide" />
                  <Carousel.Caption>
                    <h6>{names[i]}</h6>
                    <p className="text">{current}</p>
                    <img className="Stars" src={stars} alt="Five Stars" />
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <Card.Text>
            {aboutContent2}
            If you have already been in one of my photo shoots, consider leaving
            a review of your own at this
            <a href="https://www.google.com/search?ei=BrVRXd-mB4ST8gKqrJ6wAg&q=peterborough+photography+vita&oq=peterborough+photography+vita&gs_l=psy-ab.3..33i160l3.17794.19904..20339...0.0..0.155.465.4j1......0....1..gws-wiz.......0i71j0j0i22i30.OcEXuhH-bk4&ved=0ahUKEwjfwdKDgP7jAhWEiVwKHSqWByYQ4dUDCAo&uact=5#lrd=0x4877f1e132da8599:0xa6b0b2aeb580e2ef,3,,,">
              &nbsp;link.&nbsp;
            </a>
            Thank you
          </Card.Text>
        </Card.Body>
      </Card>
    </Styled>
  );
};
const Styled = styled.div`
  display: flexbox;
  justify-content: center;
  .card-title {
    text-align: center;
  }
  .carousel {
    width: 350px;
    margin: auto;
  }
  .carousel-inner {
    border-radius: 7px;
  }
  .carousel-caption {
    padding: 0;
    color: gray;
  }
  .text {
    margin: 0;
    font-size: 0.74rem;
  }
  .Stars {
    position: relative;
    width: 166px;
    z-index: -1;
  }
  .card {
    width: 66.6%;
  }
  padding-top: 91px;

  @media only screen and (max-width: 767px) {
    .card {
      width: 100%;
    }
  }
  @media only screen and (min-width: 1040px) {
    .card {
      width: 1040px;
    }
  }
`;
export default About;
