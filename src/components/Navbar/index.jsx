import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { logIn, logOut, writePost, getPosts } from "../../service/firebase";

const NavbarComponent = () => {
  const [user, setUser] = useState(null);

  const handleLogIn = () => {
    logIn()
      .then((result) => {
        setUser(result.user);
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Navbar sticky="top" bg="light" expand="md" className="shadow bg-white">
      <Container>
        <Navbar.Brand>Icys Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">some links</Nav>
        </Navbar.Collapse>
      </Container>
      {!user && <button onClick={handleLogIn}>Log in</button>}
      {user && <p>{user.displayName}</p>}
      {user && <button onClick={handleLogOut}>Log out</button>}
    </Navbar>
  );
};

export default NavbarComponent;
