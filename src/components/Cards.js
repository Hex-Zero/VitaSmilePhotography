import React from "react"
import Card from "react-bootstrap/Card"
import styled from "styled-components"

const Cards = ({ name, title, content }) => {
  return (
    <Styled>
      <Card border="light">
        <Card.Header>{name}</Card.Header>
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
    padding-left: 8%;
    padding-right: 8%;
  }
`

export default Cards
