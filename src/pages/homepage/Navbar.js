import React from "react";

import SearchBar from "./SearchBar";
import Login from "./Login";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header>
      <nav className="p-1">
        <ul className="navbar-list flex justify-between">
          <li className="flex align-center justify-center">
            <Logo />
          </li>
          <li className="flex align-center justify-center">
            <SearchBar />
          </li>
          <ul className="navbar-list flex align-center gap-2">
            <li className="flex align-center justify-center">
              <Login />
            </li>
            <li className="flex align-center justify-center white badge-container">
              <Wishlist />
            </li>
            <li className="flex align-center justify-center white badge-container">
              <Cart />
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
