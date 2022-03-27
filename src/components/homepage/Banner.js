import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  return (
    <Link to="/products">
      <div className="banner border-radius rel">
        <img
          className="img-banner"
          src="./assets/ecomm-banner.jpg"
          alt="banner"
        />
        <div className="banner-btn pr-1 pb-1 flex gap-1">
          <button className="btn btn-primary">SHOP NOW</button>
        </div>
      </div>
    </Link>
  );
};

export default Banner;
