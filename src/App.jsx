import React from "react";
import { useEffect, useState } from "react";
import PhotographerCard from "./components/PhotographerCard";
import FilterSidebar from "./components/FilterSidebar";
import SearchBar from "./components/SearchBar";
import SortBar from "./components/SortBar";

function App() {
  const [allPhotographers, setAllPhotographers] = useState([]);
  const [filteredPhotographers, setFilteredPhotographers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    city: "",
    minPrice: "",
    minRating: "",
    styles: [],
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchPhotographers = async () => {
      try {
        const res = await fetch("http://localhost:3001/photographers");
        const data = await res.json();
        setAllPhotographers(data);
        setFilteredPhotographers(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching photographers:", err);
      }
    };

    fetchPhotographers();
  }, []);


  useEffect(() => {
    let result = [...allPhotographers];


    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
        item.name.toLowerCase().includes(term) ||
        item.location.toLowerCase().includes(term) ||
        item.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    }
     
    if (filters.city) {
      result = result.filter((item) => item.location === filters.city);
    }

    if (filters.minPrice) {
      result = result.filter((item) => item.price >= parseInt(filters.minPrice));
    }

    if (filters.minRating) {
      result = result.filter((item) => item.rating >= parseFloat(filters.minRating));
    }

    if (filters.styles.length > 0) {
      result = result.filter((item) =>
        filters.styles.every((style) => item.styles.includes(style))
      );
    }


    if (sortOption === "priceLowHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "ratingHighLow") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "recent") {
      result.sort((a, b) => b.id - a.id);
    }

    setFilteredPhotographers(result);
  }, [filters, searchTerm, sortOption, allPhotographers]);

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Photographers</h1>

      <div className="flex flex-col sm:flex-row gap-6">

        <FilterSidebar filters={filters} onChange={setFilters} />
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            <SortBar sortOption={sortOption} onChange={setSortOption} />
          </div>
-
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {loading ? (
              <p>Loading...</p>
            ) : filteredPhotographers.length === 0 ? (
              <p>No photographers found</p>
            ) : (
              filteredPhotographers.map((item) => (
                <PhotographerCard
                  key={item.id}
                  photographer={item}
                  onViewProfile={() => window.location.href = `/photographer/${item.id}`}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
