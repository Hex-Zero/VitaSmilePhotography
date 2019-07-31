import React from "react"
import Card from "react-bootstrap/Card"
import styled from "styled-components"

const Cards = ({ name, title1, title2, title3, content1, content2, content3 }) => {
  return (
    <Styled>
      <Card border="light">
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{title1}</Card.Title>
          <Card.Text>{content1}</Card.Text>
          <Card.Title>{title2}</Card.Title>
          <Card.Text>{content2}</Card.Text>
          <Card.Title>{title3}</Card.Title>
          <Card.Text>{content3}</Card.Text>
        </Card.Body>
      </Card>
    </Styled>
  )
}

const Styled = styled.div`
  .card-header {
    padding-left: 25%;
  }
  .card-text {
    font-size: 16px;
  }

  @media only screen and (max-width: 767px) {
    .card-text {
      padding-right: 8%;
    }
  }
`

export default Cards
