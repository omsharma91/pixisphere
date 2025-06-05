import React from "react";

const SortBar = ({ sortOption, onChange }) => {
  return (
    <select
      value={sortOption}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border border-gray-300 rounded-md"
    >
      <option value="">Sort by</option>
      <option value="priceLowHigh">Price: Low to High</option>
      <option value="ratingHighLow">Rating: High to Low</option>
      <option value="recent">Recently Added</option>
    </select>
  );
};

export default SortBar;
