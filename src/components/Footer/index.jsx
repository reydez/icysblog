import React from "react";
import { contactList } from "../utils/helpers";

const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;
