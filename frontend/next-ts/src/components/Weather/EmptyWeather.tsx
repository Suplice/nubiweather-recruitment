interface EmptyWeatherProps {
  city: string;
}

const EmptyWeather: React.FC<EmptyWeatherProps> = ({ city }) => {
  return (
    <div className="text-gray-500 text-sm py-4">
      Unfortunately no weather data was found for {city}.
    </div>
  );
};
export default EmptyWeather;
