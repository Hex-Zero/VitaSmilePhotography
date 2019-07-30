import React, { useState } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Phone from "./Phone"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
const Navigation = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Styled>
      <Phone />
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Call Or Email Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>Number here</Modal.Body>
        <Modal.Body>Email here</Modal.Body>
        <Modal.Footer>
          <Button as="a" variant="warning" href="tel:+447933640414">
            Call Now
          </Button>
          <Button as="a" variant="warning" href="mailto:hex0@live.com">
            Email Now
          </Button>
          {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
        </Modal.Footer>
      </Modal>
    </Styled>
  )
}

const Styled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .navbar-toggler {
    font-size: 1rem;
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
    -webkit-text-fill-color: transparent;
    padding: 0;
    width: 267px;
  }
  .nav-link {
    font-size: 13px;
  }
  .dropdown-item {
    font-size: 13px;
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
`

export default Navigation
