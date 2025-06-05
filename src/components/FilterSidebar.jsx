import React, { useState } from "react";

const FilterSidebar = ({ filters, onChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const updateFilter = (key, value) => {
    const updated = { ...localFilters, [key]: value };
    setLocalFilters(updated);
    onChange(updated);
  };

  const handleCheckbox = (style) => {
    const styles = [...(localFilters.styles || [])];
    if (styles.includes(style)) {
      updateFilter("styles", styles.filter((s) => s !== style));
    } else {
      updateFilter("styles", [...styles, style]);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full sm:w-64">
      <h2 className="font-bold mb-3">Filters</h2>

      <label className="block mb-2">
        City:
        <select
          value={localFilters.city}
          onChange={(e) => updateFilter("city", e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        >
          <option value="">All</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </label>

      <label className="block mb-2">
        Min Price:
        <input
          type="number"
          value={localFilters.minPrice}
          onChange={(e) => updateFilter("minPrice", e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Min Rating:
        <input
          type="number"
          step="0.1"
          value={localFilters.minRating}
          onChange={(e) => updateFilter("minRating", e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <fieldset className="mt-4">
        <legend className="font-semibold mb-2">Styles:</legend>
        {["Candid", "Outdoor", "Studio", "Indoor", "Traditional"].map((style) => (
          <label key={style} className="block text-sm">
            <input
              type="checkbox"
              checked={localFilters.styles?.includes(style)}
              onChange={() => handleCheckbox(style)}
              className="mr-2"
            />
            {style}
          </label>
        ))}
      </fieldset>
    </div>
  );
};

export default FilterSidebar;
