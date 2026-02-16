import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import logo from "../assets/images/snplogo.webp";
import arrow from "../assets/icons/arrow.png";

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="custom-navbar"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" height="55" />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="bg-light"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link
              className="text-white fs-4"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="text-white fs-4"
              onClick={() => setExpanded(false)}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="text-white fs-4"
              onClick={() => setExpanded(false)}
            >
              Publications
            </Nav.Link>
            <Nav.Link
              className="text-white fs-4"
              onClick={() => setExpanded(false)}
            >
              Feedback
            </Nav.Link>
          </Nav>

          <div className="d-flex gap-3 mt-4 mt-lg-0 flex-column flex-lg-row text-center">
            <Button
              variant="outline-light"
              className="rounded-pill px-4 py-2"
              onClick={() => setExpanded(false)}
            >
              Get a Franchise
            </Button>

            <Button
              variant="danger"
              className="rounded-pill px-4 py-2 d-flex align-items-center justify-content-center gap-2"
              onClick={() => setExpanded(false)}
            >
              Order Online
              <img src={arrow} alt="arrow" height="14" />
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
