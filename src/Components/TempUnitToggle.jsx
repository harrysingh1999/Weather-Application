import React from "react";

const TempUnitToggle = ({ isCelsius, onToggle }) => {
  return (
    <div className="flex justify-center mb-4">
      <button
        onClick={onToggle}
        className={`px-4 py-2 rounded-md 
        bg-blue-500
         text-white font-bold hover:bg-blue-600`}
      >
        {isCelsius ? "Switch to Fahrenheit" : "Switch to Celsius"}
      </button>
    </div>
  );
};

export default TempUnitToggle;
