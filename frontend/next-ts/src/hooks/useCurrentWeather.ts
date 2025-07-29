import { fetchCurrentWeatherData } from "@/lib/weather";
import { useQuery } from "@tanstack/react-query";

const useCurrentWeather = (city: string) => {
  const currentData = useQuery({
    queryKey: ["current", city],
    queryFn: () => fetchCurrentWeatherData(city),
    staleTime: 1000 * 60 * 15,
  });

  return {
    current: currentData.data?.current,
    error: currentData.error?.message,
    isLoading: currentData.isLoading,
  };
};

export default useCurrentWeather;
