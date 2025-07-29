"use client";

import { FORECAST_DAYS } from "@/constants/cities";
import useForecastWeather from "@/hooks/useForecastWeather";
import LoadingSpinner from "./LoadingSpinner";
import WeatherError from "./WeatherError";
import EmptyWeather from "./EmptyWeather";
import Image from "next/image";

interface ForecastWeatherProps {
  city: string;
}

const ForecastWeather: React.FC<ForecastWeatherProps> = ({ city }) => {
  const { forecast, error, isLoading } = useForecastWeather(
    city,
    FORECAST_DAYS
  );

  if (isLoading) return <LoadingSpinner />;
  if (error) return <WeatherError error={error} />;
  if (!forecast?.forecastday?.length) return <EmptyWeather city={city} />;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-white">Forecast</h3>
      {forecast.forecastday.map((day) => (
        <div
          key={day.date}
          className="p-4 border border-zinc-700 rounded-xl bg-zinc-800 text-sm text-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="font-medium text-white">{day.date}</p>
            <div className="flex items-center gap-2">
              <Image
                src={`https:${day.day.condition.icon}`}
                alt={day.day.condition.text}
                height={64}
                width={64}
              />
              <p>{day.day.condition.text}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>Avg. temperature: {day.day.avgtemp_c}&deg;C</p>
            <p>Humidity: {day.day.avghumidity}%</p>
            <p>UV: {day.day.uv}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastWeather;
