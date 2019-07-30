import React from "react"
import styled from "styled-components"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import angelOne from "../assets/topcarousel/angelOne.jpg"
import angelTwo from "../assets/topcarousel/angelTwo.jpg"
const About = () => {
  return (
    <Styled>
      <Card>
        <Card.Img variant="top" src={angelOne} />
        <Card.Body>
          <Card.Title>Family Run Photography Business</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis risus sed vulputate odio ut enim
            blandit volutpat maecenas. Enim facilisis gravida neque convallis a cras semper auctor
            neque. Massa id neque aliquam vestibulum morbi. Felis donec et odio pellentesque.
            Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Nunc vel risus
            commodo viverra maecenas accumsan lacus vel. Sed arcu non odio euismod lacinia. Amet
            commodo nulla facilisi nullam vehicula. Diam maecenas sed enim ut sem viverra. Porttitor
            rhoncus dolor purus non enim praesent elementum facilisis. Sollicitudin nibh sit amet
            commodo nulla. Imperdiet massa tincidunt nunc pulvinar. Nullam eget felis eget nunc
            lobortis mattis aliquam. Vitae elementum curabitur vitae nunc sed velit dignissim.
          </Card.Text>
          <Button variant="warning">Facebook Page</Button>
        </Card.Body>
        <Card.Img variant="top" src={angelTwo} />
      </Card>
    </Styled>
  )
}
const Styled = styled.div`
  display: flexbox;
  justify-content: center;
  margin-top: 70px;
  .card {
    width: 66.6%;
  }

  @media only screen and (max-width: 767px) {
    .card {
      width: 100%;
    }
  }
`

export default About
