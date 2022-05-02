import React from "react";
import "./Header.css";
import logo from "../images/visionify_Logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="img" />
    </div>
  );
};

export default Header;
