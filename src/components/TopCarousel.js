import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import styled from "styled-components"
import angelOne from "../assets/topcarousel/angelOne.jpg"
import angelTwo from "../assets/topcarousel/angelTwo.jpg"
import angelThree from "../assets/topcarousel/angelThree.jpg"
import uuid from "uuid"

const TopCarousel = ({ style, id }) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  const src = [angelOne, angelTwo, angelThree]

  return (
    <Styled>
      <div className="caruselWrapper">
        <Carousel
          style={style}
          id={id}
          interval={1800}
          className="Car1"
          activeIndex={index}
          pauseOnHover={false}
          direction={direction}
          onSelect={handleSelect}>
          {src.map(c => {
            return (
              <Carousel.Item key={uuid()}>
                <img className=" .img-fluid d-block w-100" src={c} alt="First slide" />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    </Styled>
  )
}

const Styled = styled.div`
  .caruselWrapper {
    background: #f8f8f8;
    width: 100%;
  }
  .Car1 {
    margin: 0 auto;
    width: 88%;
    height: 90%;
  }
`

export default TopCarousel
