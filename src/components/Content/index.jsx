import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

function Content() {
  return (
    <div className="content">
      <Row className="m-0 p-0" style={{ width: "100%" }}>
        <Col
          md={6}
          lg={7}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            flex: 1,
            gap: "20px",
          }}
        >
          {new Array(5).fill("item").map((item, idx) => (
            <div
              key={idx}
              style={{
                width: "100%",
                height: "300px",
                background: "red",
                borderRadius: "20px",
                padding: "1em",
                boxShadow: "0px .8rem 1rem rgba(50, 50, 50, 0.45)",
              }}
            >{`${item} - ${idx + 1}`}</div>
          ))}
        </Col>
        <Col
          className="d-none d-md-block"
          md={6}
          lg={5}
          style={{
            flex: 0.5,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50%",
              background: "yellow",
            }}
          >
            Some stuff
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Content;
