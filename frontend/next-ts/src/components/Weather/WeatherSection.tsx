import { CITIES } from "@/constants/cities";
import WeatherCityCard from "./WeatherCityCard";

const WeatherSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2  gap-6 justify-items-center items-start min-h-screen p-6 sm:p-8 lg:p-10 bg-zinc-950">
      {CITIES.map((city) => (
        <WeatherCityCard key={city} city={city} />
      ))}
    </section>
  );
};

export default WeatherSection;
