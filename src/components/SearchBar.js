// components/SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="searchbar cursor-pointer">
      <form
        onSubmit={handleSubmit}
        className="bg-primary w-full px-20 flex flex-row py-1 items-center rounded-3xl border-2 border-secondary mb-20"
      >
        <input
          type="text"
          className="w-full px-4 py-2 text-center border-none outline-none rounded-2xl"
          placeholder="Enter Desired Location"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
