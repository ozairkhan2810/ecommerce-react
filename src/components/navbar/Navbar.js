import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar flex align-center p-1">
        <div className="header-menu">
          <span className="material-icons"> menu </span>
        </div>
        <Link to="/">
          <img
            className="header-logo"
            src="./assets/crickit-logo.png"
            alt="crickit-logo"
          />
        </Link>
        <SearchBar />
        <Link to="/login" className="header-link">
          <div className="header-login-link">Login</div>
        </Link>
        <Link to="/wishlist" className="header-link">
          <div className="header-wishlist-link rel">
            <span className="material-icons"> favorite_border </span>
            <span className="badge-icon">5</span>
          </div>
        </Link>
        <Link to="/cart" className="header-link">
          <div className="header-cart-link rel mr-1">
            <span className="material-icons"> shopping_cart </span>
            <span className="badge-icon">5</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
