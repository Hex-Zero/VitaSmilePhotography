import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import styled from "styled-components"
import cam from "../assets/cam.png"
import { Link } from "react-router-dom"
const Navigation = () => {
  return (
    <Styled>
      <Navbar className="NavBar" bg="light" expand="md">
        <Navbar.Brand as={Link} to="/Vita-Smile-Photography/">
          <img src={cam} alt="" />
          Vita Smile Photography
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className="justify-content-end Links" id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/Vita-Smile-Photography/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Vita-Smile-Photography/About">
              About
            </Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Call</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">E-mail</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Location</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Vita-Smile-Photography/Pricing">
                Pricing
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styled>
  )
}

const Styled = styled.div`
  .navbar-toggler {
    margin-right: 4%;
  }

  .navbar-brand {
    width: 200px;
  }
  img {
    width: 23%;
    padding-right: 1%;
  }
  .Links {
    padding-right: 6%;
  }
  .NavBar {
    position: fixed;
    padding-left: 8%;
    width: 100%;
    z-index: 3000;
    top: 0;
    background-image: linear-gradient(white, #e6e6e6);
  }
  @media only screen and (max-width: 500px) {
    .NavBar {
      padding-left: 5%;
    }
  }
`
export default Navigation
