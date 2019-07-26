import React from "react"
import Card from "react-bootstrap/Card"
import styled from "styled-components"

const Cards = ({ header, title, content }) => {
  return (
    <Styled>
      <Card border="light">
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
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
    padding-left: 15%;
    padding-right: 15%;
  }
`

export default Cards
