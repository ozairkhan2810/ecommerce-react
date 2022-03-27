import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import SearchBar from "./SearchBar";
import { useWishlist } from "../../context/wishlist/wishlist-context";

const Navbar = () => {
  const { wishlistState } = useWishlist();
  const { wishlist } = wishlistState;
  console.log(wishlist);
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
        <Link to="/products">
          <span className="product-link">Products</span>
        </Link>
        <SearchBar />
        <Link to="/login" className="header-link">
          <div className="header-login-link">Login</div>
        </Link>
        <Link to="/wishlist" className="header-link">
          <div className="header-wishlist-link rel">
            <span className="material-icons">
              {" "}
              favorite_border
              {wishlist && wishlist.length > 0 && (
                <span
                  className="badge-ico"
                  style={{
                    position: "absolute",
                    top: "-6px",
                    fontSize: "1.25rem",
                  }}
                >
                  {wishlist.length}
                </span>
              )}
            </span>
          </div>
        </Link>
        <Link to="/cart" className="header-link">
          <div className="header-cart-link rel mr-1">
            <span className="material-icons"> shopping_cart </span>
            <span
              style={{
                position: "absolute",
                top: "-10px",
                fontSize: "1.25rem",
              }}
            >
              5
            </span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
