import React from "react";
import logo from "../assets/social-brothers-logo.png";
import headerimage from "../assets/sb-header-photo.jpg";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <img src={logo}></img>
        <h1>
          Social <span>Brothers</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
