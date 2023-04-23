import React from "react";
import './SearchBar.css'
function SearchBar() {
  return (
    <form className="search-bar">
      <label htmlFor="location">Location</label>
      <input type="text" id="location" name="location" />
      <label htmlFor="cuisine">Cuisine</label>
      <select id="cuisine" name="cuisine">
        <option value="">Select Cuisine</option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        <option value="japanese">Japanese</option>
        <option value="american">American</option>
      </select>
      <label htmlFor="capacity">Capacity</label>
      <input type="number" id="capacity" name="capacity" />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
