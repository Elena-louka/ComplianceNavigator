import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex justify-center py-4">
      <div className="flex border-2 rounded">
        <input
          type="search"
          className="px-4 py-2 w-80"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <button
          className="flex items-center justify-center px-4 border-l"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
