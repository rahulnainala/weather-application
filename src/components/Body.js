import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_Key } from "../utils/constants";

const Body = ({ searchQuery }) => {
  const [weatherData, setWeatherData] = useState({
    name: "Place Name",
    country: "Country",
    temp_c: "Temp",
    temp_f: "Temp",
    feelslike_c: "Temp Feels ",
    feelslike_f: "Temp Feels ",
    condition_text: "Condition",
  });
  const [isCelsius, setIsCelsius] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const renderTemperature = () => {
    return (
      <div
        className="weather-data flex flex-col justify-center items-center h-3/4"
        onClick={toggleTemperatureUnit}
      >
        <div id="location" className="text-4xl mb-4">
          {weatherData.name}
        </div>
        <div id="country" className="text-3xl mb-4">
          {weatherData.country}
        </div>
        {isCelsius ? (
          <>
            <div
              id="temp_main"
              className="text-5xl mb-2 cursor-pointer bg-gradient-to-r from-purple-500 via-cyan-400 to-green-500 text-transparent bg-clip-text"
            >
              {weatherData.temp_c}°C
            </div>
            <div id="temp" className="text-l">
              (Click to change to Fahrenheit)
            </div>
            <div id="conditiontext" className="text-3xl">
              Feels Like{" "}
              <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-green-500 text-transparent bg-clip-text">
                {" "}
                {weatherData.feelslike_c} °C
              </span>
            </div>
          </>
        ) : (
          <>
            <div
              id="temp_main"
              className="text-5xl mb-2 cursor-pointer bg-gradient-to-r from-purple-500 via-cyan-400 to-green-500 text-transparent bg-clip-text"
            >
              {weatherData.temp_f}℉
            </div>
            <div id="temp" className="text-l">
              (Click to change to Celsius)
            </div>
            <div id="conditiontext" className="text-3xl ">
              Feels Like{" "}
              <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-green-500 text-transparent bg-clip-text">
                {weatherData.feelslike_f} ℉
              </span>
            </div>
          </>
        )}
        <div className="text-xl pt-1">{weatherData.condition_text}</div>
      </div>
    );
  };

  const fetchData = async (query) => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${query}&days=7&aqi=no&alerts=no`
      );
      const json = await data.json();
      const { location, current } = json;

      setWeatherData({
        name: location.name,
        country: location.country,
        temp_c: current.temp_c,
        temp_f: current.temp_f,
        feelslike_c: current.feelslike_c,
        feelslike_f: current.feelslike_f,
        condition_text: current.condition.text,
      });

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchData(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div className="text-center">
      {isLoading ? <Shimmer /> : renderTemperature()}
    </div>
  );
};

export default Body;
