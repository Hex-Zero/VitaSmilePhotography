import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import mainLogo from "../assets/sideIcons/main.png";
const Navigation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Styled>
      <Navbar collapseOnSelect={true} className="NavBar" bg="dark" expand="md">
        <Navbar.Brand as={Link} href="#" to="/">
          <img
            src={mainLogo}
            alt="Vita Smile Photography logo"
            className="main-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end Links"
          id="basic-navbar-nav"
        >
          <Nav>
            <Nav.Link as={Link} href="#" to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="#" to="/About">
              About
            </Nav.Link>
            <NavDropdown
              className="Links"
              title="Contact"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#" onClick={handleShow}>
                Call Or Email
              </NavDropdown.Item>
              <NavDropdown.Item
                as="a"
                href="https://www.google.com/maps/dir//Vita-Smile-Photography,+11+James+Ave,+Peterborough+PE1+5BL/@52.5895663,-0.271727,13z/"
                target="_blank"
              >
                Location
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href="#" to="/Pricing">
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
          <Button
            as="a"
            variant="warning"
            href="mailto:Vita.Brasiunaite@gmail.com"
          >
            Email Now
          </Button>
        </Modal.Footer>
      </Modal>
    </Styled>
  );
};

const Styled = styled.div`
  font-family: "Overpass";
  display: flex;
  justify-content: center;
  .dropdown-item.active,
  .dropdown-item:active {
    color: #212529;
    text-decoration: none;
    background-color: #fbce49e3;
  }
  .dropdown-item:hover {
    background-color: white;
  }
  .main-logo {
    width: 150px;
  }
  .navbar-toggler {
    padding: 4px 8px;
    font-size: 0.95rem;
  }
  .modal-content {
    width: 200px;
  }
  .navbar-toggler {
    background: linear-gradient(
      154deg,
      rgb(111, 81, 38) 10%,
      rgb(255, 255, 102) 100%
    );
  }
  .dropdown-menu {
    background-color: #fbce49e3 !important;
  }
  /* .navbar-brand {
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
  } */
  .nav-link {
    font-size: 15px;
    color: rgb(244, 206, 67) !important;
  }
  .nav-link:hover {
    color: rgb(249, 225, 136) !important ;
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
    background: linear-gradient(
      0deg,
      rgba(1, 2, 97, 0.92) 0%,
      rgba(4, 5, 117, 1) 20%,
      rgb(0, 26, 212) 100%
    ) !important;
  }
  @media only screen and (max-width: 767px) {
    .main-logo {
      width: 120px;
    }
    .NavBar {
      width: 100%;
      padding-left: 5%;
    }
  }

  @media only screen and (min-width: 1040px) {
    .main-logo {
      width: 120px;
    }
    .NavBar {
      margin: 0 auto;
      width: 1040px;
    }
  }
`;

export default Navigation;
