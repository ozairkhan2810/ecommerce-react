import React from "react";
import logo from "../../assets/crickit-logo.png";

const Logo = () => {
  return (
    <a href="/">
      <img className="brand" src={logo} alt="crickit-logo" />
    </a>
  );
};

export default Logo;
