import React from "react";

function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
