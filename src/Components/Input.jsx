import React from "react";
import "./input.css" 

const Input = (props) => {
  const handleInputChange = (event) => {
    props.setSearchQuery(event.target.value);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Movie..."
        className="search-input"
        value={props.searchQuery}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={props.onSearchClick}>
        <img src="./src/assets/icons/SearchIcon.svg" alt="" className="search-icon" />
        <p>Search</p>
      </button>
    </div>
  );
};

export default Input;
