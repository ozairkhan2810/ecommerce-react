import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/ecomm-banner.jpg";

const Banner = () => {
  return (
    <Link to="/products">
      <div style={{ marginTop: "3.25rem" }} className="banner border-radius rel">
        <img className="img-banner" src={banner} alt="banner" />
        <div className="banner-btn pr-1 pb-1 flex gap-1">
          <button className="btn btn-primary">SHOP NOW</button>
        </div>
      </div>
    </Link>
  );
};

export default Banner;
