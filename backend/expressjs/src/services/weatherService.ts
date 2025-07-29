import {
  FetchCurrentWeatherResult,
  FetchForecastWeatherResult,
} from "../types/weather";

const API_WEATHER_URL = "https://api.weatherapi.com/v1";

const getCurrentWeather = async (
  q: string
): Promise<FetchCurrentWeatherResult> => {
  const API_KEY = process.env.WEATHER_API_KEY;

  const response = await fetch(
    `${API_WEATHER_URL}/current.json?key=${API_KEY}&q=${q}`
  );

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch current weather");
  }

  return responseData;
};

const getForecastWeather = async (
  q: string,
  days: string
): Promise<FetchForecastWeatherResult> => {
  const API_KEY = process.env.WEATHER_API_KEY;

  const response = await fetch(
    `${API_WEATHER_URL}/forecast.json?key=${API_KEY}&q=${q}&days=${days}`
  );

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch forecast weather");
  }

  return responseData;
};

export default { getForecastWeather, getCurrentWeather };
