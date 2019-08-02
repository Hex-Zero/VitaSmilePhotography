import React, { useState } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
const Navigation = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Styled>
      <Navbar collapseOnSelect={true} className="NavBar" bg="light" expand="md">
        <Navbar.Brand as={Link} href="#" to="/Vita-Smile-Photography/">
          Vita Smile Photography
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end Links" id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} href="#" to="/Vita-Smile-Photography/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="#" to="/Vita-Smile-Photography/About">
              About
            </Nav.Link>
            <NavDropdown className="Links" title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={handleShow}>
                Call Or Email
              </NavDropdown.Item>
              <NavDropdown.Item
                as="a"
                href="https://www.google.com/maps/@52.569658,-0.2263321,19.33z"
                target="_blank">
                Location
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href="#" to="/Vita-Smile-Photography/Pricing">
                Pricing
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Call Or Email Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>Phone : 07817916583</Modal.Body>
        <Modal.Body>E-mail : Vita.Brasiunaite@gmail.com</Modal.Body>
        <Modal.Footer>
          <Button as="a" variant="warning" href="tel:+447817916583">
            Call Now
          </Button>
          <Button as="a" variant="warning" href="mailto:Vita.Brasiunaite@gmail.com">
            Email Now
          </Button>
        </Modal.Footer>
      </Modal>
    </Styled>
  )
}

const Styled = styled.div`
  font-family: "Overpass";
  display: flex;
  justify-content: center;
  .dropdown-item.active,
  .dropdown-item:active {
    color: gray;
    text-decoration: none;
    background-color: white;
  }
  .navbar-toggler {
    padding: 4px 8px;
    font-size: 0.95rem;
  }
  .modal-content {
    width: 200px;
  }
  .navbar-brand {
    font-size: 29.5px;
    font-family: "Norican", cursive;

    background: -webkit-linear-gradient(
      89deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(7, 28, 57, 1) 24%,
      rgba(15, 60, 120, 1) 50%,
      rgba(15, 60, 120, 1) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0;
    width: 267px;
  }
  .nav-link {
    font-size: 15px;
  }
  .dropdown-item {
    font-size: 15px;
  }
  .NavBar {
    padding: 0.378rem 1rem;
    position: fixed;
    width: 66.6%;
    z-index: 5;
    top: 0;
    background-image: linear-gradient(white, #e6e6e6);
  }
  @media only screen and (max-width: 767px) {
    .NavBar {
      width: 100%;
      padding-left: 5%;
    }
  }

  @media only screen and (min-width: 1040px) {
    .NavBar {
      margin: 0 auto;
      width: 1040px;
    }
  }
`

export default Navigation
