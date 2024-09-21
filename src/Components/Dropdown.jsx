import React from "react";

export default function Dropdown({ filteredCities, handleCitySelect }) {
  return (
    <div
      className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10 
       max-h-60 overflow-y-auto"
    >
      {filteredCities.length > 0 ? (
        filteredCities.map((city, index) => (
          <div
            key={index}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleCitySelect(city)}
          >
            {city}
          </div>
        ))
      ) : (
        <div className="p-2 text-gray-500">
          No listed cities found, try search{" "}
        </div>
      )}
    </div>
  );
}
