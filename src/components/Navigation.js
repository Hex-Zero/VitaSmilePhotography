import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import styled from "styled-components"
const Navigation = () => {
  return (
    <Styled>
      <Navbar className="NavBar" bg="light" expand="lg">
        <Navbar.Brand href="#Events">Vita Smile Photography</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Events">Events</Nav.Link>
            <Nav.Link href="#Gallery">Gallery</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styled>
  )
}

const Styled = styled.div`
  .NavBar {
    position: fixed;
    padding-left: 20%;
    width: 100%;
    z-index: 3000;
    top: 0;
    background-image: linear-gradient(white, #e6e6e6);
  }
`
export default Navigation
