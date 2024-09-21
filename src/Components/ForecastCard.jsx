import React from "react";

const ForecastCard = ({ day, isCelsius }) => {
  const dayOfWeek = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-center items-center">
      <p className="text-lg font-bold mb-2">{dayOfWeek(day.datetime)}</p>
      {(
        <img
          src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/PNG/1st%20Set%20-%20Color/${day.icon}.png`}
          alt={day.conditions}
        />
      ) || "❓"}
      <p className="capitalize mb-2">{day.conditions}</p>
      <p className="text-sm">
        High: {day.tempmax.toFixed(1)} {`${isCelsius ? "°C" : "°F"} `}| Low:{" "}
        {day.tempmin.toFixed(1)} {`${isCelsius ? "°C" : "°F"} `}
      </p>
    </div>
  );
};

export default ForecastCard;
