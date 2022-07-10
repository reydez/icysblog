import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { LinkContainer } from "react-router-bootstrap";
import { UserContext } from "../../providers/UserProvider";
import { auth, logIn, logOut } from "../../service/firebase";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const { currentUser } = useContext(UserContext);

  const toggleOffCanvas = () => setShow((show) => !show);

  const handleLogout = () => {
    logOut();
    toggleOffCanvas();
  };

  const handleLogin = () => {
    logIn();
  };

  return (
    <Navbar sticky="top" bg="light" expand="md" className="shadow bg-white">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Icys Blog</Navbar.Brand>
        </LinkContainer>
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
            <LinkContainer to="/">
              <Offcanvas.Title role="button" onClick={toggleOffCanvas}>
                Icys Blog
              </Offcanvas.Title>
            </LinkContainer>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <LinkContainer to="/dashboard">
                <Nav.Link onClick={toggleOffCanvas}>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/create-discussion">
                <Nav.Link onClick={toggleOffCanvas}>Create discussion</Nav.Link>
              </LinkContainer>
            </Nav>
            {currentUser ? (
              <button onClick={handleLogout}>Log out</button>
            ) : (
              <button onClick={handleLogin}>Log in</button>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
