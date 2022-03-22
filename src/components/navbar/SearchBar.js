import React from "react";
import "./navbar.css";

const SearchBar = () => {
  return (
    <div className="rel input-container">
      <span className="material-icons search black"> search </span>
      <input
        className="input-search black"
        type="text"
        placeholder="Search Here"
        name="search"
      />
    </div>
  );
};

export default SearchBar;
