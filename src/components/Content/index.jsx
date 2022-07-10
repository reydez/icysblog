import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RenderDiscussions from "./RenderDiscussions";

function Content() {
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
        className="d-none d-md-block w-25 mw-25"
        style={{ minWidth: "100px" }}
        md={6}
        lg={5}
      >
        <div className="w-100 h-100 rounded p-3 bg-warning text-dark">
          Log in to create discussion or see dashboard
        </div>
      </div>
    </div>
  );
}

export default Content;
