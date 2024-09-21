import React, { lazy, Suspense, useEffect, useState } from "react";
import WeatherDisplay from "./Components/WeatherDisplay";
import FiveDayForecast from "./Components/FiveDayForecast";
import TempUnitToggle from "./Components/TempUnitToggle";
import CitySearchInput from "./Components/CitySearchInput";
import { WEATHER_API_KEY } from "./utils/constant";

const ErrorComponent = lazy(() => import("./Components/ErrorComponent"));

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Delhi");
  const [isCelsius, setIsCelsius] = useState(true);
  const [error, setError] = useState("");

  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${WEATHER_API_KEY}`;

  const fetchWeatherData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      console.log(data);

      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const toggleUnit = () => {
    setIsCelsius((prev) => !prev);
  };

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  const convertTemperature = (temp) => {
    return isCelsius ? ((temp - 32) * 5) / 9 : temp;
  };

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <Suspense fallback={<div>Lazy Loading....</div>}>
        <ErrorComponent errorMessage={error} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Weather Forecast App
      </h1>

      <CitySearchInput
        onCitySelect={handleCitySelect}
        onSearch={handleSearch}
      />

      <TempUnitToggle isCelsius={isCelsius} onToggle={toggleUnit} />

      <WeatherDisplay
        city={city}
        isCelsius={isCelsius}
        weather={{
          ...weatherData,
          temp: convertTemperature(weatherData.currentConditions.temp),
        }}
      />

      <FiveDayForecast
        isCelsius={isCelsius}
        forecast={weatherData.days.slice(0, 5).map((day) => ({
          ...day,
          tempmax: convertTemperature(day.tempmax),
          tempmin: convertTemperature(day.tempmin),
        }))}
      />
    </div>
  );
};

export default App;
