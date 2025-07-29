import { fetchForecastWeatherData } from "@/lib/weather";
import { useQuery } from "@tanstack/react-query";

const useForecastWeather = (city: string, forecastDays: number) => {
  const forecastData = useQuery({
    queryKey: ["forecast", city],
    queryFn: () => fetchForecastWeatherData(city, forecastDays),
    staleTime: 1000 * 60 * 15,
  });

  return {
    forecast: forecastData.data?.forecast,
    error: forecastData.error?.message,
    isLoading: forecastData.isLoading,
  };
};

export default useForecastWeather;
