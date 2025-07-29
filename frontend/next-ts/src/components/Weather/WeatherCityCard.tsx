import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

interface WeatherCityCardProps {
  city: string;
}

const WeatherCityCard: React.FC<WeatherCityCardProps> = ({ city }) => {
  return (
    <div className="flex flex-col gap-4 bg-zinc-900 text-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold tracking-tight text-white">{city}</h2>
      <CurrentWeather city={city} />
      <ForecastWeather city={city} />
    </div>
  );
};

export default WeatherCityCard;
