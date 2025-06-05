import React, { useState, useEffect } from "react";
import { debounce } from "../utils/debounce";

const SearchBar = ({ searchTerm, onSearch }) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  const debouncedSearch = debounce(onSearch, 500);

  useEffect(() => {
    debouncedSearch(inputValue);
  
    return () => {
      debouncedSearch.cancel?.(); 
    };
  }, [inputValue, debouncedSearch]);

  return (
    <input
      type="text"
      placeholder="Search by name, location, or tag..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
    />
  );
};

export default SearchBar;