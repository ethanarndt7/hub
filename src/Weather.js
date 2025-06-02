import React, { useState, useEffect } from "react";
import "./Weather.css";

const API_KEY = "447aa62c4ce5e010284ee7677f79e8fa"; // Replace with your actual key

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        

        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`
          );
          const data = await res.json();
          setWeather(data);
        } catch (err) {
          setError("Failed to load weather data");
        }
      },
      () => setError("Location access denied")
    );
  }, []);

  if (error) {
    return <div className="weather">{error}</div>;
  }

  if (!weather || !weather.main || !weather.weather) return null;

console.log("Weather data:", weather);


  return (
    <div className="weather">
      <div>{Math.round(weather.main.temp)}°F</div>
      <div>{weather.weather[0].main}</div>
    </div>
  );
}
