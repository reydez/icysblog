import React from "react";
import Container from "react-bootstrap/esm/Container";
import { contactList } from "../utils/helpers";

const Footer = () => {
  console.log(contactList);
  return (
    <Container
      className="m-0 p-0"
      style={{
        maxWidth: "100%",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        boxShadow: "0px -.5rem 1rem rgba(50, 50, 50, 0.15)",
      }}
    >
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} Icys Blog - All Rights Reserved
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {contactList.map((contact) => {
          return (
            <a href={contact.url} target="_blank" key={contact.url}>
              {contact.name}
            </a>
          );
        })}
      </div>
    </Container>
  );
};

export default Footer;
