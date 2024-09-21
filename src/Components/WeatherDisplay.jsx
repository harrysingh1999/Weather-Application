import React from "react";

const WeatherDisplay = ({ isCelsius, weather }) => {
  console.log(weather);

  const temperature = weather.temp.toFixed(1);
  const condition = weather.currentConditions.conditions;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md flex flex-col justify-center items-center mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-2">{weather.resolvedAddress}</h2>
      {(
        <img
          src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/PNG/1st%20Set%20-%20Color/${weather.currentConditions.icon}.png`}
          alt={weather.currentConditions.conditions}
          className=""
        />
      ) || "❓"}
      <p className="text-lg mb-2 capitalize">{condition}</p>
      <p className="text-4xl font-bold">
        {temperature}
        {`${isCelsius ? "°C" : "°F"} `}{" "}
      </p>
    </div>
  );
};

export default WeatherDisplay;
