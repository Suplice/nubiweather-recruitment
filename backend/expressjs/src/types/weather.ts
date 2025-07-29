import type { APIErrorResponse } from "./common";

export type WeatherCondition = {
  text: string;
  icon: string;
  code: number;
};

export type CurrentWeather = {
  last_updated: string;
  temp_c: number;
  condition: WeatherCondition;
  wind_kph: number;
  wind_dir: string;
  pressure_mb: number;
  humidity: number;
  feelslike_c: number;
  windchill_c: number;
  uv: number;
};

export type ForecastWeatherDay = {
  avgtemp_c: number;
  avghumidity: number;
  condition: WeatherCondition;
  uv: number;
};

export type ForecastDay = {
  date: string;
  day: ForecastWeatherDay;
};

export type FetchForecastWeatherResult = {
  forecast?: {
    forecastday: ForecastDay[];
  };
};

export type FetchCurrentWeatherResult = {
  current?: CurrentWeather;
};

export type FetchCurrentWeatherResponse = APIErrorResponse &
  FetchCurrentWeatherResult;

export type FetchForecastWeatherResponse = APIErrorResponse &
  FetchForecastWeatherResult;
