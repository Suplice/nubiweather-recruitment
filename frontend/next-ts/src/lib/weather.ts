import {
  FetchCurrentWeatherResponse,
  FetchCurrentWeatherResult,
  FetchForecastWeatherResponse,
  FetchForecastWeatherResult,
} from "@/types/weather";

const EXPRESS_API_URL = process.env.NEXT_PUBLIC_EXPRESS_API_URL;

export const fetchForecastWeatherData = async (
  city: string,
  forecastDays: number
): Promise<FetchForecastWeatherResult> => {
  if (!EXPRESS_API_URL)
    throw new Error("An unexpected error occured, please try again later.");

  const searchParams: URLSearchParams = new URLSearchParams({
    q: city,
    days: forecastDays.toString(),
  });

  const response = await fetch(
    `${EXPRESS_API_URL}/forecast-weather?${searchParams}`,
    {
      method: "GET",
    }
  );

  const responseData: FetchForecastWeatherResponse = await response.json();

  if (!response.ok || responseData.error) {
    throw new Error(
      responseData.error ||
        `An error occured while fetching forecast weather for ${city}`
    );
  }

  return responseData;
};

export const fetchCurrentWeatherData = async (
  city: string
): Promise<FetchCurrentWeatherResult> => {
  if (!EXPRESS_API_URL)
    throw new Error("An unexpected error occured, please try again later.");

  const searchParams: URLSearchParams = new URLSearchParams({
    q: city,
  });

  const response = await fetch(
    `${EXPRESS_API_URL}/realtime-weather?${searchParams}`,
    {
      method: "GET",
    }
  );

  const responseData: FetchCurrentWeatherResponse = await response.json();

  if (!response.ok || responseData.error) {
    throw new Error(
      responseData.error ||
        `An error occured while fetching current weather for ${city}`
    );
  }

  return responseData;
};
