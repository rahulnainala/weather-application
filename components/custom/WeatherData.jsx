"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Cloud, CloudRainIcon, CloudyIcon, Search, Sun } from "lucide-react";

const defaultHours = [
  { time: "3PM", temp: 72, icon: <Sun /> },
  { time: "6PM", temp: 68, icon: <Cloud /> },
  { time: "9PM", temp: 64, icon: <CloudRainIcon /> },
  { time: "12AM", temp: 62, icon: <CloudyIcon /> },
];

const WeatherData = () => {
  const [location, setLocation] = useState("Hyderabad");
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="px-4">
      {/* Search Section */}
      <div className="flex gap-2 items-center pb-5">
        <Input type="location" placeholder="Location" className="flex-1" />
        <Button variant="secondary" type="submit" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {/* Current Weather */}
      <h4 className="scroll-m-20 text-xl font-medium pt-5 tracking-tight">
        Daily Forecast
      </h4>
      <div className="border rounded-2xl p-4 md:p-6 shadow-sm text-center mb-6">
        <h1 className="text-lg md:text-xl font-light text-gray-600">
          New York · 3:45 PM
        </h1>
        <div className="flex justify-center items-center my-2 md:my-4">
          <Sun className="text-4xl md:text-6xl text-yellow-400" />
          <span className="text-5xl md:text-7xl font-light ml-2 md:ml-4">
            72°
          </span>
        </div>
        <p className="text-gray-600 capitalize">Sunny</p>
        <p className="text-gray-500 mt-1 md:mt-2">H:75° L:62°</p>
      </div>

      {/* Hourly Forecast */}
      <div className="mb-6 overflow-x-auto">
        <h4 className="scroll-m-20 text-xl font-medium pt-5 tracking-tight">
          Hourly Forecast
        </h4>
        <div className="flex space-x-2 md:space-x-4 pb-2">
          {defaultHours.map((hour, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-1 md:gap-2 border rounded-lg p-2 md:p-3 shadow-xs text-center min-w-[80px] md:min-w-[150px] min-h-[100px] md:min-h-[150px]"
            >
              <p className="text-gray-300 text-sm md:text-xl">{hour.time}</p>
              <div className="text-xl md:text-3xl mx-auto my-1 text-yellow-400">
                {hour.icon}
              </div>
              <p className="text-lg md:text-xl font-medium">{hour.temp}°</p>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Forecast */}
      <div className="rounded-2xl shadow-sm mb-6">
        <h4 className="scroll-m-20 text-xl font-medium pt-5 tracking-tight">
          Weekly Forecast
        </h4>
        <div className="flex flex-col justify-center border rounded-lg">
          {["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"].map((day) => (
            <div
              key={day}
              className="px-3 md:px-5 flex justify-between items-center py-2 md:py-3 border-b last:border-0"
            >
              <Sun className="text-xl md:text-2xl text-yellow-400" />
              <p className="text-gray-200 text-sm md:text-base">{day}</p>
              <p className="text-gray-500 text-sm md:text-base">
                75° <span className="text-gray-300">62°</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
