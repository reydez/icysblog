import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RenderDiscussions from "./RenderDiscussions";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { logIn, logOut } from "../../service/firebase";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

function Content() {
  const { currentUser } = useContext(UserContext);

  const handleLogout = () => {
    logOut();
  };

  const handleLogin = () => {
    logIn();
  };

  return (
    <div className="content w-100 mw-100 h-100 d-flex my-4">
      <Row className="m-0 p-0" style={{ width: "100%" }}>
        <Col
          md={6}
          lg={7}
          className="d-flex justify-content-center flex-column flex-grow-1 w-100"
          style={{
            gap: "15px",
          }}
        >
          {<RenderDiscussions />}
        </Col>
      </Row>
      <div
        className="d-none d-md-block main-right-side-container"
        md={6}
        lg={5}
      >
        {currentUser ? (
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
            <div className="go-detail">
              <span className="icon mx-2">
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">Go to Dashboard</Tooltip>}
                >
                  <Link to={`/dashboard`} role="button">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </OverlayTrigger>
              </span>
            </div>
          </div>
        ) : (
          <div className="border rounded text-dark right-side-container">
            <div className="right-side-container-body">
              <span>You have to log in if you want to make a discussion!</span>
            </div>
            <div className="right-side-container-log-btn">
              <button className="btn btn-primary" onClick={handleLogin}>
                Log in
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
