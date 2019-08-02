import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import reactlogo from "../assets/react_bootstrap_logo.png"
import reactlo from "../assets/reactlogo.png"
const Footer = () => {
  return (
    <Styled>
      <Container fluid={true}>
        <Row noGutters={true}>
          <Col xs={2}>
            <p className="p">Powered by: </p>
          </Col>
          <Col xs={2}>
            <img src={reactlogo} alt="React Bootstrap" />
            <img src={reactlo} alt="React" />
          </Col>
          <Col xs={{ span: 2, offset: 4 }}>
            <p className="p">Made by: </p>
          </Col>
          <Col className="hexlink" xs={2}>
            <a href="https://github.com/Hex-Zero" target="__blank">
              <span id="Hex">Hex</span>
              <span id="Zero">Zero</span>
            </a>
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}
const Styled = styled.div`
  margin: 0 auto;
  width: 66.6%;
  .container-fluid {
    margin-top: 5px;
    border: 1px solid #e6e6e6;
    background-image: linear-gradient(white, #e6e6e6);
    width: 100%;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
  #Hex {
    margin-left: 4px;
    text-decoration: none;
    font-family: "Lobster", cursive;
    border-color: gold;
    border-style: solid;
    background-color: gold;
    color: rgba(248, 236, 221, 0.822);
  }
  #Zero {
    text-decoration: none;
    font-family: "Lobster", cursive;
    border-color: gold;
    border-style: solid;
    background-color: rgba(248, 236, 221, 0.822);
    color: gold;
  }
  .p {
    padding-top: 6px;
    text-align: end;
    font-size: 13px;
    margin: auto 0;
  }
  img {
    padding: 3px 0px;
    width: 30px;
    height: 30px;
    padding-right: 4px;
  }
  .hexlink {
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  @media only screen and (min-width: 1040px) {
    width: 1040px;
  }
`
export default Footer
