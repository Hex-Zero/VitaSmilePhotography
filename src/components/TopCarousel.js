import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import angelOne from "../assets/topcarousel/angelOne.jpg"
import angelTwo from "../assets/topcarousel/angelTwo.jpg"
import angelThree from "../assets/topcarousel/angelThree.jpg"
import styled from "styled-components"

const TopCarousel = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }
  return (
    <Styled>
      <Carousel
        className="Car1"
        pause="false"
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={angelOne} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={angelTwo} alt="Third slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={angelThree} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Styled>
  )
}
const Styled = styled.div`
  .Car1 {
    width: 100%;
    height: 90%;
  }
`

export default TopCarousel
