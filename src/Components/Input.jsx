import "./input.css";

const Input = (props) => {
  const { searchQuery, onSearchClick } = props;
  const handleInputChange = (event) => {
    props.setSearchQuery(event.target.value);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Movie..."
        className="search-input"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={onSearchClick}>
        <img
          src="./src/assets/icons/SearchIcon.svg"
          alt=""
          className="search-icon"
        />
        <p>Search</p>
      </button>
    </div>
  );
};

export default Input;
