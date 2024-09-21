import React, { lazy, Suspense, useState } from "react";
import { cities } from "../utils/constant";
const Dropdown = lazy(() => import("./Dropdown"));

const CitySearchInput = ({ onCitySelect, onSearch }) => {
  const [filteredCities, setFilteredCities] = useState(cities);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCity(inputValue);
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCities(filtered);
    setDropdownVisible(inputValue.length > 0);
  };

  const handleCitySelect = (city) => {
    setDropdownVisible(false);
    onCitySelect(city);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto mb-6">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={city}
          onChange={(e) => handleInputChange(e)}
          onFocus={() => setDropdownVisible(true)}
          placeholder="Search for a city..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {filteredCities.length === 0 && (
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Search
          </button>
        )}
      </form>

      {dropdownVisible && (
        <Suspense fallback={<div>Lazy Loading....</div> } >
          <Dropdown
            filteredCities={filteredCities}
            handleCitySelect={handleCitySelect}
          />
        </Suspense>
      )}
    </div>
  );
};

export default CitySearchInput;
