import React from "react";
import ForecastCard from "./ForecastCard";

const FiveDayForecast = ({ isCelsius, forecast }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {forecast.map((day, index) => (
        <ForecastCard key={index} isCelsius={isCelsius} day={day} />
      ))}
    </div>
  );
};

export default FiveDayForecast;
