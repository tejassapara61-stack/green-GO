// Weather.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const API_KEY = "ce1e9ad5c4a6545d5561786a79781904";

export default function Weather() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      setLoading(true);
      setError("");
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      if (!weatherRes.ok) throw new Error("Weather fetch failed");
      const weatherData = await weatherRes.json();
      setWeather(weatherData);

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      if (!forecastRes.ok) throw new Error("Forecast fetch failed");
      const forecastData = await forecastRes.json();

      const dailyMap = {};
      forecastData.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];
        if (!dailyMap[date]) {
          dailyMap[date] = { temps: [], rain: 0, icon: item.weather[0].icon };
        }
        dailyMap[date].temps.push(item.main.temp);
        dailyMap[date].icon = item.weather[0].icon;
        if (item.rain && item.rain["3h"]) {
          dailyMap[date].rain += item.rain["3h"];
        }
      });

      const dailyArray = Object.keys(dailyMap)
        .slice(0, 7)
        .map((date) => {
          const { temps, rain, icon } = dailyMap[date];
          const avgTemp =
            temps.reduce((sum, t) => sum + t, 0) / temps.length || 0;
          return {
            date: new Date(date).toLocaleDateString("en-US", {
              weekday: "short",
            }),
            temp: Math.round(avgTemp),
            rain: `${rain.toFixed(1)} mm`,
            icon,
          };
        });

      setForecast(dailyArray);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude),
        () => setError("Location access denied. Please search manually.")
      );
    } else {
      setError("Geolocation not supported. Please search manually.");
    }
  }, []);

  const fetchSuggestions = async (query) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
      );
      const data = await res.json();
      setSuggestions(data);
    } catch {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (city) => {
    setLocation(city.name);
    setSuggestions([]);
    fetchWeatherByCoords(city.lat, city.lon);
  };

  const handleSearch = async () => {
    if (!location.trim()) return;
    setError("");
    setLoading(true);
    try {
      const geoRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
      );
      const geoData = await geoRes.json();
      if (!geoData[0]) {
        setError("City not found.");
        setLoading(false);
        return;
      }
      fetchWeatherByCoords(geoData[0].lat, geoData[0].lon);
    } catch {
      setError("Search failed.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="w-full flex flex-col items-center p-4 md:p-10">
        <h2 className="text-green-700 text-3xl font-extrabold mb-6">
          🌦 Weather Forecast / मौसम पूर्वानुमान
        </h2>

        {/* Search Box */}
        <div className="relative w-full max-w-md mb-8">
          <input
            type="text"
            placeholder="Search city / शहर खोजें..."
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              fetchSuggestions(e.target.value);
            }}
            className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="absolute right-2 top-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Search
          </button>
          {suggestions.length > 0 && (
            <ul className="absolute top-full mt-2 w-full bg-white rounded-lg shadow z-20">
              {suggestions.map((s) => (
                <li
                  key={`${s.lat}-${s.lon}`}
                  className="px-4 py-2 hover:bg-green-50 cursor-pointer"
                  onClick={() => handleSelectSuggestion(s)}
                >
                  {s.name}, {s.state ? s.state + ", " : ""}{s.country}
                </li>
              ))}
            </ul>
          )}
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}
        {loading && <p className="text-green-700">Loading...</p>}

        {/* Current Weather */}
        {weather && (
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-6 max-w-md text-center mb-10 border border-green-200">
            <h3 className="text-xl font-bold mb-2 text-green-800">
              {weather.name}, {weather.sys.country}
            </h3>
            <div className="flex justify-center items-center gap-4 mb-4">
              <img
                alt="icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                className="w-20 h-20"
              />
              <p className="text-5xl font-extrabold text-green-700">
                {Math.round(weather.main.temp)}°C
              </p>
            </div>
            <p className="capitalize font-semibold text-green-800">
              {weather.weather[0].description}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Humidity: {weather.main.humidity}% | Wind:{" "}
              {Math.round(weather.wind.speed)} km/h
            </p>
          </div>
        )}

        {/* 7-Day Forecast */}
        {forecast.length > 0 && (
          <div className="w-full max-w-5xl">
            <h4 className="text-xl font-bold text-green-700 mb-4 text-center">
              7-Day Forecast / 7-दिन का पूर्वानुमान
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {forecast.map((f) => (
                <div
                  key={f.date}
                  className="flex flex-col items-center bg-white rounded-xl border border-green-100 shadow-lg p-4 hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                  <span className="font-bold text-green-700 text-sm mb-1">
                    {f.date}
                  </span>
                  <img
                    src={`https://openweathermap.org/img/wn/${f.icon}.png`}
                    alt="forecast"
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-2xl font-extrabold text-green-800">
                    {f.temp}°C
                  </span>
                  <span className="text-sm text-blue-600 mt-1">
                    🌧 {f.rain}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
