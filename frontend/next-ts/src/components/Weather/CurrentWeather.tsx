"use client";

import useCurrentWeather from "@/hooks/useCurrentWeather";
import LoadingSpinner from "./LoadingSpinner";
import WeatherError from "./WeatherError";
import EmptyWeather from "./EmptyWeather";
import Image from "next/image";

interface CurrentWeatherProps {
  city: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city }) => {
  const { current, isLoading, error } = useCurrentWeather(city);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <WeatherError error={error} />;
  if (!current) return <EmptyWeather city={city} />;

  return (
    <div className="flex flex-col gap-4 text-sm text-gray-100">
      <h3 className="text-lg font-semibold">Current Weather</h3>

      <div className="flex items-center gap-3">
        <Image
          src={`https:${current.condition.icon}`}
          alt={current.condition.text}
          height={64}
          width={64}
        />
        <div>
          <p className="text-2xl font-semibold text-white">
            {current.temp_c}&deg;C
          </p>
          <p className="text-sm text-gray-300">{current.condition.text}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <p>Perceived temperature: {current.feelslike_c}&deg;C</p>
        <p>Pressure: {current.pressure_mb} hPa</p>
        <p>
          Wind: {current.wind_kph} km/h ({current.wind_dir})
        </p>
        <p>Humidity: {current.humidity}%</p>
        <p>Windchill: {current.windchill_c}&deg;C</p>
        <p>UV: {current.uv}</p>
      </div>

      <div>
        <p className="text-xs text-gray-400">
          Last actualization: {current.last_updated}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
