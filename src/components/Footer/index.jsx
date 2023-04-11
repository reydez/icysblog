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
          gap: "25px",
        }}
      >
        {contactList.map((contact) => {
          return (
            <a
              href={contact.url}
              style={{ color: contact.color }}
              target="_blank"
              key={contact.url}
            >
              {contact.icon}
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
