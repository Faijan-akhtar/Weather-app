// src/Weather.js

import React, { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = () => {
    const location = city && country ? `${city},${country}` : city || country;
    const url = `http://api.weatherapi.com/v1/current.json?key=26493191ee6542528a493022240607&q=${location}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeather(data);
        setError(null);
      })
      .catch(error => {
        setError(error.toString());
        setWeather(null);
      });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter country"
        />
        <button type="submit">Search</button>
      </form>

      {error && <div>Error: {error}</div>}
      {!error && weather && (
        <div>
          <h1>Weather in {weather.location.name}, {weather.location.country}</h1>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="Weather icon" />
        </div>
      )}
    </div>
  );
}

export default Weather;
