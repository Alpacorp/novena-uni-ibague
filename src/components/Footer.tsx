import React from "react";
import "./Components.css";

const Footer = () => {
  return (
      <div className="footer">
        <p>
          Universidad de Ibagué |{" "}
          {new Date().getFullYear().toString()}
        </p>
      </div>
  );
};

export default Footer;
