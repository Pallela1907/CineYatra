import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
