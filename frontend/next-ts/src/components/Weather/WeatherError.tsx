interface WeatherErrorProps {
  error: string;
}

const WeatherError: React.FC<WeatherErrorProps> = ({ error }) => {
  return <div className="text-red-500 text-sm py-4">{error}</div>;
};
export default WeatherError;
