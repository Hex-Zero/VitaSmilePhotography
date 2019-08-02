import React from "react"
import Card from "react-bootstrap/Card"
import styled from "styled-components"

const Cards = ({
  name,
  title1,
  title2,
  title3,
  content1,
  content2,
  content3,
  devider1,
  devider2
}) => {
  const devider = check => (check ? <hr /> : null)
  const content = (title, content) =>
    title ? (
      <>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </>
    ) : null
  return (
    <Styled>
      <Card border="light">
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          {content(title1, content1)}
          {devider(devider1)}
          {content(title2, content2)}
          {devider(devider2)}
          {content(title3, content3)}
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
