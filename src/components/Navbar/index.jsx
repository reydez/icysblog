import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { LinkContainer } from "react-router-bootstrap";
import { auth, logIn, logOut } from "../../service/firebase";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const toggleOffCanvas = () => setShow((show) => !show);

  const handleLogout = () => {
    logOut();
    toggleOffCanvas();
  };

  return (
    <Navbar sticky="top" bg="light" expand="md" className="shadow bg-white">
      <Container>
        <Navbar.Brand>Icys Blog</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleOffCanvas}
        />
        <Navbar.Offcanvas
          id="responsive-navbar-nav"
          placement="end"
          show={show}
          onHide={toggleOffCanvas}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Icys Blog</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <LinkContainer to="/dashboard">
                <Nav.Link onClick={toggleOffCanvas}>LinkedIn</Nav.Link>
              </LinkContainer>
            </Nav>
            <button onClick={logIn}>Log in</button>
            <button onClick={handleLogout}>Log out</button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
