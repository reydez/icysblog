import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { LinkContainer } from "react-router-bootstrap";
import { UserContext } from "../../providers/UserProvider";
import { auth, logIn, logOut } from "../../service/firebase";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);

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
            {currentUser ? (
              <div className="d-sm-block d-md-none position-relative">
                <div className="border rounded text-dark right-side-container">
                  <div>
                    <span>You are logged in</span>
                  </div>
                  <div className="right-side-container-header">
                    <img src={currentUser.photoURL} alt="" />
                  </div>
                  <div className="right-side-container-body">
                    {currentUser.displayName}
                  </div>
                  <div className="right-side-container-footer">
                    {currentUser.email}
                  </div>
                  <div className="right-side-container-log-btn">
                    <button className="btn btn-danger" onClick={handleLogout}>
                      Log out
                    </button>
                  </div>
                </div>
                <div className="go-detail">
                  <span className="icon mx-2">
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">Go to Dashboard</Tooltip>
                      }
                    >
                      <Link
                        to={`/dashboard`}
                        role="button"
                        onClick={toggleOffCanvas}
                      >
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </Link>
                    </OverlayTrigger>
                  </span>
                </div>
              </div>
            ) : (
              <div className="d-sm-block d-md-none">
                <div className="border rounded text-dark right-side-container">
                  <div className="right-side-container-body">
                    <span>
                      You have to log in if you want to make a discussion!
                    </span>
                  </div>
                  <div className="right-side-container-log-btn">
                    <button className="btn btn-primary" onClick={handleLogin}>
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            )}

            {currentUser && (
              <div className="d-none d-md-flex justify-content-end flex-grow-1">
                <Nav className="">
                  <LinkContainer to="/create-discussion">
                    <Nav.Link
                      onClick={toggleOffCanvas}
                      className="me-3 text-primary"
                    >
                      Create discussion
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
                <Link to="/dashboard">
                  <img
                    className="navbar-image"
                    src={currentUser.photoURL}
                    alt=""
                  />
                </Link>
              </div>
            )}
            {currentUser && (
              <div className="d-sm-flex d-md-none justify-content-center">
                <Nav className="w-100">
                  <LinkContainer to="/create-discussion">
                    <Nav.Link
                      className="btn btn-primary text-light mt-2 py-1 px-2"
                      onClick={toggleOffCanvas}
                    >
                      Create discussion
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </div>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
