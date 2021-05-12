import React from "react";
import logo from "../assets/social-brothers-logo.png";
import headerimage from "../assets/sb-header-photo.jpg";

const Header = () => {
  return (
    <div
      className="header-wrapper"
      style={{
        backgroundImage: `url(${headerimage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}
    >
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
