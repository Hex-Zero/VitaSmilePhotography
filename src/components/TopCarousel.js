import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import styled from "styled-components"
import uuid from "uuid"

const TopCarousel = ({ style, id, src }) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  return (
    <Styled>
      <div className="caruselWrapper">
        <Carousel
          style={style}
          id={id}
          interval={2300}
          className="Car1"
          activeIndex={index}
          pauseOnHover={false}
          direction={direction}
          onSelect={handleSelect}>
          {src.map(current => {
            return (
              <Carousel.Item key={uuid()}>
                <img className=" .img-fluid d-block w-100" src={current} alt="First slide" />
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
    background: linear-gradient(90deg, rgb(4, 5, 119) 0%, rgb(28, 1, 76) 48%, rgba(4, 5, 119) 100%);

    width: 100%;
  }
  .Car1 {
    margin: 0 auto;
    width: 94%;
    height: 90%;
  }
`

export default TopCarousel
