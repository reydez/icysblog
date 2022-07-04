import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
const NavbarComponent = () => {
  return (
    <Navbar sticky="top" bg="light" expand="md" className="shadow bg-white">
      <Container>
        <Navbar.Brand>Icys Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">some links</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
