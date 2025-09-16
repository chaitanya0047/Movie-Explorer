import React from "react";

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
        Search
      </button>
    </div>
  );
};

export default Input;
